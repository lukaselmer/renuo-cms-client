///<reference path="content_block_service.ts"/>
///<reference path="content_block.ts"/>

const service = new ContentBlockService();
var content = service.loadContent('some-path');
