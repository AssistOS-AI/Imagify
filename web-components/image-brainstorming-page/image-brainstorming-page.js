export class imageBrainstormingPage {
    constructor(element, invalidate) {
        this.element = element;
        this.invalidate = invalidate;
        this.invalidate();
    }

    beforeRender() {}

    async showAddImageModal() {
        await webSkel.showModal("add-image-modal", { presenter: "add-personality-modal"});
    }

}