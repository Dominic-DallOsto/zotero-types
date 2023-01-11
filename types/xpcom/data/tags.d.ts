declare namespace _ZoteroTypes {
	interface Tags extends DataObjects {
		[attr: string]: any;
		_initialized: boolean;
		_tagsByID: Set<any>;
		_idsByTag: Set<any>;
		_libraryColors: {};
		_libraryColorsByName: {};
		_itemsListImagePromises: {};
		init(): Promise<void>;
		/**
		 * Returns a tag for a given tagID
		 *
		 * @param {Integer} tagID
		 * @return {Promise<String|false>} - A tag name, or false if tag with id not found
		 */
		getName(): string | false;
		/**
		 * Returns the tagID matching given fields, or false if none
		 *
		 * @param {String} name - Tag data in API JSON format
		 * @return {Integer} tagID
		 */
		getID(name: string): number | false;
		/**
		 * Returns the tagID matching given fields, or creates one and returns its id
		 *
		 * Requires a wrapping transaction
		 *
		 * @param {String} name - Tag data in API JSON format
		 * @return {Promise<Integer>} tagID
		 */
		create(name: string): Promise<number>;

		getLongTagsInLibrary(libraryID: number): Promise<number[]>;

		/**
		 * Get all tags in library
		 *
		 * @param {Number} libraryID
		 * @param {Number[]} [types] - Tag types to fetch
		 * @return {Promise<Array>}   A promise for an array containing tag objects in API JSON format
		 *                            [{ { tag: "foo" }, { tag: "bar", type: 1 }]
		 */
		getAll(libraryID: number, types: number[]): Promise<{ tag: string, type: number }[]>
		/**
		 * Get the items associated with the given tag
		 *
		 * @param  {Number} tagID
		 * @return {Promise<Number[]>}  A promise for an array of itemIDs
		 */
		getTagItems(libraryID: number, tagID: number): Promise<Number[]>;
	
		search(str: string): Promise<{ tag: string, type: number }[]>;
		
		/**
		 * Rename a tag and update the tag colors setting accordingly if necessary
		 *
		 * @param {Number} tagID
		 * @param {String} newName
		 * @return {Promise}
		 */
		rename(libraryID: number, oldName: string, newName: string): Promise<void>;
		
		/**
		 * @param {Integer} libraryID
		 * @param {Integer[]} tagIDs
		 * @param {Function} [onProgress]
		 * @param {Integer[]} [types]
		 * @return {Promise}
		 */
		removeFromLibrary(libraryID: number, tagIDs: number[], onProgress: Function, types: number[]): Promise<void>;

		/**
		 * @param {Integer} libraryID
		 * @return {Integer[]} - An array of tagIDs
		 */
		getAutomaticInLibrary(libraryID: number): number[];

		/**
		 * Remove all automatic tags in the given library
		 */
		removeAutomaticFromLibrary(libraryID: number, onProgress: Function): Promise<void>;
		
		/**
		 * Delete obsolete tags from database
		 *
		 * @param {Number|Number[]} [tagIDs] - tagID or array of tagIDs to purge
		 * @return {Promise}
		 */
		purge(tagIDs): Promise<void>;

		/**
		 *
		 * @param {Integer} libraryID
		 * @param {String} name Tag name
		 * @return {Object|false} An object containing 'color' as a hex string (e.g., '#990000') and
		 *     'position', or false if no colored tag with that name
		 */
		getColor(libraryID, name): string | false;

		/**
		 * Get color data by position (number key - 1)
		 *
		 * @param {Integer} libraryID
		 * @param {Integer} position The position of the tag, starting at 0
		 * @return {Object|false} An object containing 'name' and 'color', or false if no color at
		 *     the given position
		 */
		getColorByPosition(libraryID: number, position: number): { name: string, color: string } | false;

		/**
		 * Get colored tags within a given library
		 *
		 * @param {Integer} libraryID
		 * @return {Map} - A Map with tag names as keys and objects containing 'color' and 'position'
		 *     as values
		 */
		getColors(libraryID: number): Set<{color: string, position: number}>
		
		/**
		 * Assign a color to a tag
		 *
		 * @return {Promise}
		 */
		setColor(libraryID: number, name: string, color: string, position: number): Promise<void>;

		/**
		 * Update caches and trigger redrawing of items in the items list
		 * when a 'tagColors' setting is modified
		 */
		notify(event: string, type: string, ids: string[], extraData: { [key: string]: any }): Promise<void>;

		toggleItemsListTags(items: Zotero.Item[], tagName: string): Promise<void>;

		/**
		 * @param {Zotero.Item[]}
		 * @return {Promise}
		 */
		removeColoredTagsFromItems(items: Zotero.Item[]): Promise<void>;

		/**
	 * A tree cell can show only one image, and (as of Fx19) it can't be an SVG,
	 * so we need to generate a composite image containing the existing item type
	 * icon and one or more tag color swatches.
	 *
	 * @params {String[]} colors - Array of swatch colors
	 * @params {String} extraImage - chrome:// URL of image to add to final image
	 * @params {Boolean} [retracted = false] - If true, show an icon indicating the item was retracted
	 * @return {Promise<String>} - A promise for a data: URL for a PNG
	 */
		generateItemsListImage(colors, extraImage, retracted): Promise<string>;

		/**
		 * From http://js-bits.blogspot.com/2010/07/canvas-rounded-corner-rectangles.html
		 *
		 * Draws a rounded rectangle using the current state of the canvas.
		 * If you omit the last three params, it will draw a rectangle
		 * outline with a 5 pixel border radius
		 *
		 * @param {CanvasRenderingContext2D} ctx
		 * @param {Number} x The top left x coordinate
		 * @param {Number} y The top left y coordinate
		 * @param {Number} width The width of the rectangle
		 * @param {Number} height The height of the rectangle
		 * @param {Number} radius The corner radius. Defaults to 5;
		 * @param {Boolean} fill Whether to fill the rectangle. Defaults to false.
		 * @param {Boolean} stroke Whether to stroke the rectangle. Defaults to true.
		 */
		_canvasRoundRect(ctx: number, x: number, y: number, width: number, height: number, radius: number, fill: boolean, stroke: boolean): void;

		/**
		 * Compare two API JSON tag objects
		 */
		equals(data1: object, data2: object, option: {}): boolean;

		cleanData(data: object): object
	}

}