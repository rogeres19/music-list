import { EventData, Page } from '@nativescript/core';
import { Song, VoiceType } from '../models/song';

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    const context = page.navigationContext;
    
    const viewModel = {
        song: context.song || {
            id: Date.now().toString(),
            name: '',
            author: '',
            key: '',
            singer: '',
            voiceType: '',
            originalKey: ''
        },
        voiceTypes: ['Soprano', 'Contralto', 'Tenor', 'Baixo'],
        selectedVoiceTypeIndex: 0,
        
        onSaveTap() {
            // Here you would typically save to a database
            page.frame.goBack();
        }
    };
    
    page.bindingContext = viewModel;
}