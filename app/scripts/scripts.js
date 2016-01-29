/**
 * Created by SelcetStudio on 1/28/16.
 */

var accordionItems = new Array();

function init() {
	// Grab the accordion items from the page
	var accrdItems = document.getElementsByTagName( 'div');
	for ( var i = 0; i < accrdItems.length; i++ ) {
		if ( accrdItems[i].className == 'accrd-item') accordionItems.push( accrdItems[i] );
	}

	// Assign onclick events to the accordion item headings
	for ( var j = 0; j < accordionItems.length; j++ ) {
		var firstChild = getFirstChildWithTagName( accordionItems[j], 'accrd-item-title');
		firstChild.onclick = toggleItem;
	}

	// Hide all accordion item bodies except the first
	for ( var k = 1; k < accordionItems.length; k++ ) {
		accordionItems[k].childNodes = 'accrd-item-description hide';
	}
}

function toggleItem() {
	var itemClass = this.parentNode.className;

	// Hide all items
	for ( var i = 0; i < accordionItems.length; i++ ) {
		accordionItems[i].className = 'accrd-item';
	}

	// Show this item if it was previously hidden
	if ( itemClass == 'accrd-item' ) {
		this.parentNode.className = 'accrd-item active';
	}
}

function getFirstChildWithTagName( element, tagNameOne ) {
	for ( var i = 0; i < element.childNodes.length; i++ ) {
		if ( element.childNodes[i].className == tagNameOne ) return element.childNodes[i];
	}
}