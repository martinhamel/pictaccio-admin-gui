import { AppContext, VNode, getCurrentInstance, render } from 'vue';

let appContext: AppContext = null;

export function renderVueNode(vNode: VNode, container: HTMLElement): void {
    if (!appContext) {
        appContext = getCurrentInstance().appContext;
    }

    vNode.appContext = appContext;
    render(vNode, container);
}
