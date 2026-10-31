// Browser checks use the zero-dependency Chromium driver bundled with Taste Skill.
import assert from 'node:assert/strict';
import {homedir} from 'node:os';
import {pathToFileURL} from 'node:url';
import {mkdirSync} from 'node:fs';
const driver = pathToFileURL(`${homedir()}/.codex/skills/design-taste-frontend/scripts/lib/cdp.mjs`);
const {Browser, sleep} = await import(driver.href);
const browser = await Browser.launch();
const origin = 'http://127.0.0.1:4173';
mkdirSync('.impeccable/review', {recursive:true});
try {
  const page = await browser.newPage({width:1440,height:900});
  await page.goto(origin);
  assert.equal(await page.eval(() => document.querySelectorAll('h1').length), 1);
  assert.equal(await page.eval(() => document.querySelectorAll('.project:not([hidden])').length), 4);
  for (const [focus, count] of [['software',3],['hardware',2],['infrastructure',1],['all',4]]) {
    await page.eval(value => document.querySelector(`[data-filter="${value}"]`).click(), focus);
    assert.equal(await page.eval(() => document.querySelectorAll('.project:not([hidden])').length), count, focus);
    assert.equal(await page.eval(() => document.querySelector('[data-filter][aria-pressed="true"]').dataset.filter), focus);
    assert.equal(await page.eval(() => new URL(location.href).searchParams.get('focus')), focus==='all'?null:focus);
  }
  await page.eval(() => history.back());
  await sleep(200);
  assert.equal(await page.eval(() => document.querySelectorAll('.project:not([hidden])').length), 1, 'Back restores filter');
  await page.goto(`${origin}/?focus=hardware`);
  assert.equal(await page.eval(() => document.querySelectorAll('.project:not([hidden])').length), 2, 'Shared filter URL');
  await page.goto(`${origin}/?focus=invalid`);
  assert.equal(await page.eval(() => document.querySelectorAll('.project:not([hidden])').length), 4, 'Invalid filter safely defaults');
  await page.eval(() => document.querySelector('summary').focus());
  await page.send('Input.dispatchKeyEvent',{type:'keyDown',key:'Enter',code:'Enter',windowsVirtualKeyCode:13,text:'\r'});
  await page.send('Input.dispatchKeyEvent',{type:'keyUp',key:'Enter',code:'Enter',windowsVirtualKeyCode:13});
  assert.equal(await page.eval(() => document.querySelector('details').open), true, 'Keyboard disclosure');
  await page.eval(() => document.querySelector('#motion-toggle').click());
  assert.equal(await page.eval(() => document.querySelector('.ascii-monogram').getAnimations()[0].playState), 'paused');
  await page.eval(() => document.querySelector('#motion-toggle').click());
  assert.equal(await page.eval(() => document.querySelector('.ascii-monogram').getAnimations()[0].playState), 'running');
  await browser.send('Browser.setPermission',{permission:{name:'clipboard-write',allowWithoutSanitization:true},setting:'granted',origin});
  await page.eval(() => document.querySelector('#copy-email').click());
  await sleep(200);
  assert.match(await page.eval(() => document.querySelector('#copy-status').textContent), /Email copied/);
  await page.eval(() => {
    navigator.clipboard.writeText = async () => {throw new Error('Permission denied');};
    document.querySelector('#copy-email').click();
  });
  await sleep(100);
  assert.match(await page.eval(() => document.querySelector('#copy-status').textContent), /Select jasas1357/);
  assert.equal(await page.eval(() => document.querySelector('#copy-email').disabled),false);
  assert.equal((await fetch(`${origin}/assets/Jose-Santana-Resume.pdf`)).status,200);
  assert.deepEqual(await page.eval(() => [...document.querySelectorAll('a[href^="#"]')].filter(a => !document.querySelector(a.hash)).map(a=>a.hash)),[]);
  assert.deepEqual(page.consoleErrors,[]);
  await page.close();
  const mobile = await browser.newPage({width:390,height:844,mobile:true,reducedMotion:true});
  for(const width of [320,390,600,768,1024,1440]){
    await mobile.setViewport({width,height:900});
    await mobile.goto(origin);
    assert.equal(await mobile.eval(() => document.documentElement.scrollWidth > innerWidth),false, `No overflow at ${width}`);
    assert.equal(await mobile.eval(() => document.getAnimations().length),0, 'Reduced motion');
    assert.equal(await mobile.eval(() => [...document.querySelectorAll('h1,h2')].every(h=>getComputedStyle(h).visibility==='visible')),true);
  }
  await mobile.setViewport({width:390,height:844,mobile:true});
  await mobile.goto(origin);
  await mobile.eval(() => {
    document.querySelector('[data-filter="hardware"]').click();
    document.querySelector('#adacva details').open=true;
    document.querySelector('#work').scrollIntoView();
  });
  await mobile.screenshot({path:'.impeccable/review/mobile-filter-open.png',format:'png',fullPage:true});
  await mobile.send('Emulation.setScriptExecutionDisabled',{value:true});
  await mobile.goto(origin);
  assert.equal(await mobile.eval(() => document.querySelectorAll('.project:not([hidden])').length),4,'No-JS content');
  assert.equal(await mobile.eval(() => document.querySelector('#work-toolbar').hidden),true,'No dead JS controls');
  await mobile.close();
  console.log('PASS: filters, URL/history, keyboard disclosure, motion control, clipboard success/failure, PDF, anchors, 6 widths, reduced motion, and no-JS fallback.');
} finally {
  await browser.close();
}
