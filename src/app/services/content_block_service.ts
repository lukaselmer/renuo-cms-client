///<reference path="../models/content_block.ts"/>
///<reference path="../data_services/ajax_service.ts"/>

class ContentBlockService {
  constructor(private ajaxService:AjaxService) {
  }

  loadContent(apiKey:string, contentPath:string):JQueryPromise<ContentBlock> {
    return this.ajaxService.fetchContentBlock(apiKey, contentPath).then(function (raw) {
      const contentBlock = raw.content_block;
      return new ContentBlock(contentBlock, apiKey, '');
    });
  }
}
