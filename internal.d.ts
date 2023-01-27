declare namespace _ZoteroTypes {
  type anyObj = { [key: string]: any };
  type ZoteroObjectURI = string;
  type RelationsPredicate = "dc:relation" | "owl:sameAs" | "dc:replaces";
  type ObjectRelations = Record<
    _ZoteroTypes.RelationsPredicate,
    _ZoteroTypes.ZoteroObjectURI[]
  >;
  type IconURI = `chrome://zotero/skin/${keyof typeof IconFile}`;
  enum IconFile {
    "annotation-close.png",
    "annotation-grippy.png",
    "annotation-hide.png",
    "annotation-move-selected.png",
    "annotation-move.png",
    "arrow_refresh.png",
    "arrow_refresh@2x.png",
    "arrow_rotate_animated.png",
    "arrow_rotate_animated@2x.png",
    "arrow_rotate_static.png",
    "arrow_rotate_static@2x.png",
    "arrow-curve-090-left.png",
    "arrow-dn@2x.png",
    "arrow-join-090.png",
    "arrow-split-090.png",
    "attach-small.png",
    "attach-small@2x.png",
    "attach.png",
    "attach@2x.png",
    "bell_error.png",
    "bookmark-pencil.png",
    "bullet_blue_empty.png",
    "bullet_blue_empty@2x.png",
    "bullet_blue.png",
    "bullet_blue@2x.png",
    "bullet_yellow.png",
    "chevron-left_808080_32.png",
    "chevron-right_808080_32.png",
    "citation-add-gray.png",
    "citation-add.png",
    "citation-delete-gray.png",
    "citation-delete.png",
    "citation-down-gray.png",
    "citation-down.png",
    "citation-up-gray.png",
    "citation-up.png",
    "cog.png",
    "cog@2x.png",
    "control_stop_blue.png",
    "control_stop_blue@2x.png",
    "cross-script.png",
    "cross.png",
    "cross@1.5x.png",
    "cross@2x.png",
    "document-search-result.png",
    "drive_network.png",
    "edit-list-order.png",
    "error.png",
    "error@2x.png",
    "group_add.png",
    "group_add@2x.png",
    "library_add.png",
    "library_add@2x.png",
    "lifebuoy.png",
    "locate-external-viewer.png",
    "locate-external-viewer@2x.png",
    "locate-internal-viewer.png",
    "locate-library-lookup.png",
    "locate-show-file.png",
    "locate-show-file@2x.png",
    "locate-view-online.png",
    "locate-view-online@2x.png",
    "minus-active.png",
    "minus-active@2x.png",
    "minus.png",
    "minus@2x.png",
    "page_white_add.png",
    "page_white_add@2x.png",
    "pdf-search.png",
    "pdf-search@2x.png",
    "pie.png",
    "plus-active.png",
    "plus-active@2x.png",
    "plus.png",
    "plus@2x.png",
    "prefs-advanced.png",
    "prefs-export.png",
    "prefs-general.png",
    "prefs-keys.png",
    "prefs-proxies.png",
    "prefs-styles.png",
    "prefs-sync.png",
    "puzzle-arrow.png",
    "report_user.png",
    "rtfscan-accept.png",
    "rtfscan-link.png",
    "searchbar-dropmarker.png",
    "searchbar-dropmarker@2x.png",
    "spinner-14px.png",
    "spinner-14px@2x.png",
    "spinner-16px.png",
    "spinner-16px@2x.png",
    "tag-automatic.png",
    "tag-automatic@2x.png",
    "tag-selector-menu.png",
    "tag-selector-menu@2x.png",
    "tag.png",
    "tag@2x.png",
    "textfield-dual.png",
    "textfield-dual@2x.png",
    "textfield-single.png",
    "textfield-single@2x.png",
    "tick.png",
    "tick@2x.png",
    "toolbar-advanced-search.png",
    "toolbar-advanced-search@2x.png",
    "toolbar-collection-add.png",
    "toolbar-collection-add@2x.png",
    "toolbar-collection-delete.png",
    "toolbar-collection-delete@2x.png",
    "toolbar-collection-edit-gray.png",
    "toolbar-collection-edit.png",
    "toolbar-collection-edit@2x.png",
    "toolbar-feed-add.png",
    "toolbar-feed-add@2x.png",
    "toolbar-feed-edit.png",
    "toolbar-feed-edit@2x.png",
    "toolbar-fullscreen-bottom.png",
    "toolbar-fullscreen-top.png",
    "toolbar-fullscreen-top@2x.png",
    "toolbar-go-arrow-disabled.png",
    "toolbar-go-arrow.png",
    "toolbar-go-arrow@2x",
    "toolbar-item-add",
    "toolbar-item-add@2x",
    "toolbar-link-add",
    "toolbar-link-add@2x",
    "toolbar-lookup.png",
    "toolbar-lookup@2x.png",
    "toolbar-note-add.png",
    "toolbar-note-add@2x.png",
    "toolbar-snapshot-add.png",
    "treeitem-artwork.png",
    "treeitem-artwork@2x.png",
    "treeitem-attachment-link.png",
    "treeitem-attachment-link@2x.png",
    "treeitem-attachment-pdf-link.png",
    "treeitem-attachment-pdf-link@2x.png",
    "treeitem-attachment-pdf.png",
    "treeitem-attachment-pdf@2x.png",
    "treeitem-attachment-snapshot.png",
    "treeitem-attachment-snapshot@2x.png",
    "treeitem-attachment-web-link.png",
    "treeitem-attachment-web-link@2x.png",
    "treeitem-audioRecording.png",
    "treeitem-audioRecording@2x.png",
    "treeitem-bill.png",
    "treeitem-bill@2x.png",
    "treeitem-blogPost.png",
    "treeitem-blogPost@2x.png",
    "treeitem-book.png",
    "treeitem-book@2x.png",
    "treeitem-bookSection.png",
    "treeitem-bookSection@2x.png",
    "treeitem-case.png",
    "treeitem-case@2x.png",
    "treeitem-computerProgram.png",
    "treeitem-computerProgram@2x.png",
    "treeitem-conferencePaper.png",
    "treeitem-conferencePaper@2x.png",
    "treeitem-dictionaryEntry.png",
    "treeitem-dictionaryEntry@2x.png",
    "treeitem-email.png",
    "treeitem-email@2x.png",
    "treeitem-encyclopediaArticle.png",
    "treeitem-encyclopediaArticle@2x.png",
    "treeitem-film.png",
    "treeitem-film@2x.png",
    "treeitem-forumPost.png",
    "treeitem-forumPost@2x.png",
    "treeitem-hearing.png",
    "treeitem-hearing@2x.png",
    "treeitem-instantMessage.png",
    "treeitem-instantMessage@2x.png",
    "treeitem-interview.png",
    "treeitem-interview@2x.png",
    "treeitem-journalArticle.png",
    "treeitem-journalArticle@2x.png",
    "treeitem-letter.png",
    "treeitem-letter@2x.png",
    "treeitem-magazineArticle.png",
    "treeitem-magazineArticle@2x.png",
    "treeitem-manuscript.png",
    "treeitem-manuscript@2x.png",
    "treeitem-map.png",
    "treeitem-newspaperArticle.png",
    "treeitem-newspaperArticle@2x.png",
    "treeitem-note-small.png",
    "treeitem-note-small@2x.png",
    "treeitem-note.png",
    "treeitem-note@2x.png",
    "treeitem-patent.png",
    "treeitem-patent@2x.png",
    "treeitem-podcast.png",
    "treeitem-preprint.png",
    "treeitem-preprint@2x.png",
    "treeitem-presentation.png",
    "treeitem-presentation@2x.png",
    "treeitem-radioBroadcast.png",
    "treeitem-report.png",
    "treeitem-report@2x.png",
    "treeitem-statute.png",
    "treeitem-statute@2x.png",
    "treeitem-thesis.png",
    "treeitem-thesis@2x.png",
    "treeitem-tvBroadcast.png",
    "treeitem-videoRecording.png",
    "treeitem-webpage-gray.png",
    "treeitem-webpage-gray@2x.png",
    "treeitem-webpage-gray@48px.png",
    "treeitem-webpage.png",
    "treeitem-webpage@2x.png",
    "treeitem-webpage@48px.png",
    "treeitem.png",
    "treeitem@2x.png",
    "treesource-bucket.png",
    "treesource-collection.png",
    "treesource-collection@2x.png",
    "treesource-commons.png",
    "treesource-duplicates.png",
    "treesource-duplicates@2x.png",
    "treesource-feed-error.png",
    "treesource-feed-error@2x.png",
    "treesource-feed-updating.png",
    "treesource-feed.png",
    "treesource-feed@2x.png",
    "treesource-feedLibrary.png",
    "treesource-feedLibrary@2x.png",
    "treesource-groups.png",
    "treesource-groups@2x.png",
    "treesource-library.png",
    "treesource-library@2x.png",
    "treesource-search.png",
    "treesource-search@2x.png",
    "treesource-share.png",
    "treesource-trash-full.png",
    "treesource-trash-full@2x.png",
    "treesource-trash.png",
    "treesource-trash@2x.png",
    "treesource-unfiled.png",
    "treesource-unfiled@2x.png",
    "warning.png",
    "warning@2x.png",
    "xmark.png",
    "xmark@2x.png",
    "zotero-new-z-16px.png",
    "zotero-new-z-48px.png",
    "zotero-z-32px-australis-mac.svg",
    "zotero-z-32px-australis-unix.svg",
    "zotero-z-32px-australis-win.svg",
    "zotero-z-32px-australis.svg",
    "zotero.svg",
    "arrow-down.gif",
    "annotation-hidden.gif",
  }
}
