export class routingService {
    constructor() {}
    async navigateToLocation(locationArray = [], appName) {
        const IMAGE_BRAINSTORMING_PAGE = "image-brainstorming-page";

        if (locationArray.length === 0 || locationArray[0] === IMAGE_BRAINSTORMING_PAGE) {
            const pageUrl = `${webSkel.currentUser.space.id}/${appName}/${IMAGE_BRAINSTORMING_PAGE}`;
            await webSkel.changeToDynamicPage(IMAGE_BRAINSTORMING_PAGE, pageUrl);
            return;
        }
 if(locationArray[locationArray.length-1]!== IMAGE_BRAINSTORMING_PAGE){
         console.error(`Invalid URL: URL must end with ${IMAGE_BRAINSTORMING_PAGE}`);
            return;
        }
        const webComponentName = locationArray[locationArray.length - 1];
        const pageUrl = `${webSkel.currentUser.space.id}/${appName}/${locationArray.join("/")}`;
        await webSkel.changeToDynamicPage(webComponentName, pageUrl);
    }
}
