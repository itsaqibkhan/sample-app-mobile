import SELECTORS from '../../../src/js/config/translations/en';
import Base from './base';
import { sanitizeSelector } from '../helpers/utils';

const SCREEN_SELECTOR = `~${ sanitizeSelector(SELECTORS.modalSelector.container) }`;

class SortingModal extends Base {
	constructor() {
		super(SCREEN_SELECTOR);
	}

	get screen() {
		// Can only get the modal based on the second option
		return $(SCREEN_SELECTOR);
	}

	get sortingButton() {
		return $(`~test-${ sanitizeSelector(SELECTORS.modalSelector.button) }`);
	}

	get cancel() {
		const selector = driver.isIOS
			? `~${ SELECTORS.modalSelector.cancel }`
			: `//*[@content-desc="${ sanitizeSelector(SELECTORS.modalSelector.container) }"]/../../*[2]`;

		return $(selector);
	}

	/**
	 * Select an option
	 *
	 * @param {string} option
	 *
	 * @return {void}
	 */
	selectOption(option) {
		let selector;

		const modalSelectorContainer = sanitizeSelector(SELECTORS.modalSelector.container);

		switch (option) {
			case SELECTORS.modalSelector.azLabel:
				selector = driver.isIOS ? `~${ SELECTORS.modalSelector.azLabel }` : `//*[@content-desc="${ modalSelectorContainer }"]/*/android.view.ViewGroup[2]`;
				break;
			case SELECTORS.modalSelector.zaLabel:
				selector = driver.isIOS ? `~${ SELECTORS.modalSelector.zaLabel }` : `//*[@content-desc="${ modalSelectorContainer }"]/*/android.view.ViewGroup[3]`;
				break;
			case SELECTORS.modalSelector.loHiLabel:
				selector = driver.isIOS ? `~${ SELECTORS.modalSelector.loHiLabel }` : `//*[@content-desc="${ modalSelectorContainer }"]/*/android.view.ViewGroup[4]`;
				break;
			case SELECTORS.modalSelector.hiLoLabel:
				selector = driver.isIOS ? `~${ SELECTORS.modalSelector.hiLoLabel }` : `//*[@content-desc="${ modalSelectorContainer }"]/*/android.view.ViewGroup[5]`;
				break;
			default:
				throw new Error(`The option '${ option }' is not valid`);
		}

		$(selector).click();
		// There is a sorting delay, this can only be done with a hard sleep :(
		return driver.pause(750);
	}

	/**
	 * Open the sorting modal
	 *
	 * @return {boolean}
	 */
	openSortingModal() {
		this.sortingButton.click();
		return this.waitForIsShown();
	}
}

export default new SortingModal();
