import { ViewNode, normalizeElementName, createElement } from "./basicdom";
import { Frame } from 'tns-core-modules/ui/frame'
import NativeElementNode from "./NativeElementNode";
import StyleElement from "./StyleElement";

export default class FrameElement extends NativeElementNode {

    constructor() {
        super('frame', Frame, null);
    }

    setAttribute(key: string, value: any) {
        if (key.toLowerCase() == "defaultcomponent") {
            console.log("loading page", value);
            let dummy = createElement('fragment');
            let page = new (value as any)({ target: dummy, props: {} });
            (this.nativeView as Frame).navigate({ create: () => (dummy.firstElement() as NativeElementNode).nativeView });
        }
    }

}