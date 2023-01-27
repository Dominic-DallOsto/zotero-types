/// <reference path="library.d.ts" />

declare namespace _ZoteroTypes {
  interface Libraries {
    // [attr: string]: any;
    readonly userLibraryID: number;
    readonly userLibrary: Zotero.Library;
    _cache?: { [i: number]: Zotero.Library };
    register(library: Zotero.Library): void;
    unregister(libraryID: number): void;
    _addToCache(
      cache: { [i: number]: Zotero.Library },
      library: Zotero.Library
    ): void;

    /**
     * Loads all libraries from DB. Groups, Feeds, etc. should not maintain an
     * independent cache.
     */
    init(): Promise<void>;

    /**
     * @param {Integer} libraryID
     * @return {Boolean}
     */
    exists(libraryID: number): boolean;

    _ensureExists(libraryID: number): void | never;

    /**
     * @return {Zotero.Library[]} - All libraries
     */
    getAll(): Zotero.Library[];

    /**
     * Get an existing library
     *
     * @param {Integer} libraryID
     * @return {Zotero.Library[] | Zotero.Library}
     */
    get(libraryID: number): Zotero.Library | false;
  }
}
