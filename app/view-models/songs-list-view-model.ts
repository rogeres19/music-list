import { Observable, ObservableArray } from '@nativescript/core';
import { Song, VoiceType } from '../models/song';

export class SongsListViewModel extends Observable {
    private _songs: ObservableArray<Song>;
    private _filteredSongs: ObservableArray<Song>;
    private _searchText: string = '';
    private _selectedVoiceType: string = '';

    constructor() {
        super();
        this._songs = new ObservableArray<Song>();
        this._filteredSongs = new ObservableArray<Song>();
        this.loadInitialData();
    }

    get songs(): ObservableArray<Song> {
        return this._filteredSongs;
    }

    get searchText(): string {
        return this._searchText;
    }

    set searchText(value: string) {
        if (this._searchText !== value) {
            this._searchText = value;
            this.notifyPropertyChange('searchText', value);
            this.filterSongs();
        }
    }

    get selectedVoiceType(): string {
        return this._selectedVoiceType;
    }

    set selectedVoiceType(value: string) {
        if (this._selectedVoiceType !== value) {
            this._selectedVoiceType = value;
            this.notifyPropertyChange('selectedVoiceType', value);
            this.filterSongs();
        }
    }

    addSong(song: Song) {
        this._songs.push(song);
        this.filterSongs();
    }

    private filterSongs() {
        let filtered = this._songs.filter(song => {
            const matchesSearch = !this._searchText || 
                song.name.toLowerCase().includes(this._searchText.toLowerCase());
            const matchesVoice = !this._selectedVoiceType || 
                song.voiceType === this._selectedVoiceType;
            return matchesSearch && matchesVoice;
        });
        this._filteredSongs.splice(0);
        this._filteredSongs.push(...filtered);
    }

    private loadInitialData() {
        // Sample data
        const initialSongs: Song[] = [
            {
                id: '1',
                name: 'Amazing Grace',
                author: 'John Newton',
                key: 'G',
                singer: 'Various',
                voiceType: 'Soprano',
                originalKey: 'F'
            }
        ];
        this._songs.push(...initialSongs);
        this.filterSongs();
    }
}