///<reference path="../../../typings/jasmine/jasmine.d.ts"/>
///<reference path="content_block_service.ts"/>
///<reference path="../models/content_block.ts"/>
///<reference path="../mocks/ajax_service_mock_data.ts"/>

describe('ContentBlockService', function () {
  it('loads a content block', function () {
    const ajaxService = new AjaxService();
    spyOn(ajaxService, 'fetchContentBlock').and.callFake(
      () => jQuery.Deferred().resolve(AjaxServiceMockData.existingContentBlock()).promise());

    const service = new ContentBlockService(ajaxService);
    service.loadContent('api-key', 'my-path').then(function (block:ContentBlock) {
      expect(block.content).toBe('some content');
      expect(block.contentPath).toBe('my-path');
      expect(block.apiKey).toBe('api-key');
      expect(block.createdAt).toEqual(new Date(2015, 11, 30));
      expect(block.updatedAt).toEqual(new Date(2015, 12, 3));
    });
    expect(ajaxService.fetchContentBlock).toHaveBeenCalledWith('api-key', 'my-path');
  });
});
