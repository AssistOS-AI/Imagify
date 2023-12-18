export class imageBrainstormingPage {
    constructor(element, invalidate) {
        this.element = element;
        this.invalidate = invalidate;
        this.invalidate();
    }

    beforeRender() {}

    async showAddImageModal() {
        await webSkel.UtilsService.showModal(document.querySelector("body"), "add-image-modal", { presenter: "add-personality-modal"});
    }

}