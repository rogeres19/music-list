import { EventData, Page, SearchBar } from '@nativescript/core';
import { SongsListViewModel } from '../view-models/songs-list-view-model';

let viewModel: SongsListViewModel;

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    viewModel = new SongsListViewModel();
    page.bindingContext = viewModel;
}

export function onSearchTextChanged(args: EventData) {
    const searchBar = <SearchBar>args.object;
    viewModel.searchText = searchBar.text;
}

export function onItemTap(args: EventData) {
    const page = <Page>args.object;
    const song = viewModel.songs.getItem(args.index);
    page.frame.navigate({
        moduleName: 'views/song-detail-page',
        context: { song: song },
        animated: true
    });
}

export function onAddTap() {
    const page = <Page>args.object;
    page.frame.navigate({
        moduleName: 'views/song-detail-page',
        context: { song: null },
        animated: true
    });
}