describe('jQuery.fn.slugPreview()', function () {
  before(function () {
    cy.visit('/');
  });
  beforeEach(function () {
    cy.window().then(win => {
      this.element = win.jQuery('<div><input /></div>');
    });
  });

  it.skip('should return the preview element', function () {
    var target = this.element.slugPreview();
    assert.ok(target.hasClass('slug-preview'));
  });

  it.skip('should restore the stack when .end() is called', function () {
    var target = this.element.slugPreview();
    assert.ok(target.end() === this.element);
  });

  it.skip('should allow a prefix to be provided', function () {
    var target = this.element.slugPreview({prefix: 'prefix'});
    assert.equal(target.find('.slug-preview-prefix').text(), 'prefix');
  });

  it.skip('should allow a placeholder to be provided', function () {
    var target = this.element.slugPreview({placeholder: 'placeholder'});
    assert.equal(target.find('.slug-preview-value').text(), 'placeholder');
  });

  it.skip('should allow translations for strings to be provided', function () {
    var target = this.element.slugPreview({
      i18n: {'Edit': 'translated'}
    });
    assert.equal(target.find('button').text(), 'translated');
  });

  it.skip('should set preview value to the initial value of the input', function () {
    var input = this.element.find('input').val('initial');
    var target = this.element.slugPreview();

    assert.equal(target.find('.slug-preview-value').text(), 'initial');
  });

  it.skip('should update the preview value when the target input changes', function () {
    var target = this.element.slugPreview();
    var input = this.element.find('input').val('initial');

    input.val('updated').change();
    assert.equal(target.find('.slug-preview-value').text(), 'updated');
  });

  it.skip('should hide the original element', function () {
    var target = this.element.slugPreview();
    assert.ok(this.element.css('display') === 'none');
  });

  it.skip('should show the original element when Edit is clicked', function () {
    var target = this.element.slugPreview();
    target.find('button').click();
    assert.ok(this.element.css('display') === '');
  });

  it.skip('should hide the preview element when Edit is clicked', function () {
    var target = this.element.slugPreview();
    target.find('button').click();
    assert.ok(target.css('display') === 'none');
  });
});
