import { createDef, LazyComponentRegistry } from 'projects/ngx-element/src/lib/tokens'

export const lazyConfig: LazyComponentRegistry = {
    definitions: [
        createDef('talk', () => import('./talk/talk.module').then(m => m.TalkModule)),
        createDef('sponsor', () => import('./sponsor/sponsor.module').then(m => m.SponsorModule))
    ],
    prefix: 'ws'
}
