import template from './md-form-inspireconformity.html';

const mdFormInspireconformityController = class MdFormInspireconformityController {
    constructor(XmlConverterService) {
        'ngInject';
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {}

    $onChanges(changes) {}

    onSave(space, field, fieldValue, separator) {
        this.XmlConverterService.setValue(this.inspireconformity, space, field, fieldValue, separator);
        this.updateInspireconformity({
            key: this.key,
            inspireconformity: this.inspireconformity
        });
    }

    onRemove() {
        this.removeInspireconformity({
            key: this.key
        });
    }

    onSelectSpecification(key, value) {
        for (let i = 0; i < this.specifications.length; i++) {
            if (this.specifications[i].name == value) {
                this.XmlConverterService.setValue(this.inspireconformity, 'md', 'specificationDate', [this.specifications[i].date]);
                this.XmlConverterService.setValue(this.inspireconformity, 'md', 'specificationDateType', ['publication']);
            }
        }
    }
}

export const mdFormInspireconformityComponent = {
    bindings: {
        multi: '@',
        key: '@',
        inspireconformity: '<',
        fields: '<',
        pass: '<',
        locales: '<',
        specifications: '<',
        updateInspireconformity: '&',
        removeInspireconformity: '&'
    },
    template: template,
    controller: mdFormInspireconformityController,
};