export class routingService {
    constructor() {}
    async navigateToLocation(locationArray = [], appName) {
        const IMAGE_BRAINSTORMING_PAGE = "image-brainstorming-page";

        if (locationArray.length === 0 || locationArray[0] !== IMAGE_BRAINSTORMING_PAGE) {
            console.error("Invalid URL structure: URL must start with 'image-brainstorming-page'");
            return;
        }

        const webComponentName = locationArray[locationArray.length - 1];
        const pageUrl = `${webSkel.currentUser.space.id}/${appName}/${locationArray.join("/")}`;
        await webSkel.changeToDynamicPage(webComponentName, pageUrl);
    }
}