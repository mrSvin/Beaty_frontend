import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { PassThrough } from 'node:stream';
import { AppContent } from './App';
import { getSeo, ORIGIN } from './components/SEO';
import { allIndexablePaths } from './beauty/content';
export { getSeo, ORIGIN };
export const indexablePaths = allIndexablePaths;
export const nonIndexablePrerenderPaths: string[] = ['/search'];
export function render(path:string):Promise<string>{return new Promise((resolve,reject)=>{const output=new PassThrough();let html='';const stream=renderToPipeableStream(<MemoryRouter initialEntries={[path]}><AppContent/></MemoryRouter>,{onAllReady(){stream.pipe(output)},onError(error){reject(error)}});const timeout=setTimeout(()=>{stream.abort();reject(new Error(`Render timed out: ${path}`))},30000);output.on('data',chunk=>html+=chunk.toString());output.on('end',()=>{clearTimeout(timeout);resolve(html)});output.on('error',error=>{clearTimeout(timeout);reject(error)})})}
