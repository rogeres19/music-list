export interface Song {
    id: string;
    name: string;
    author: string;
    key: string;
    singer: string;
    voiceType: string;
    originalKey: string;
}

export type VoiceType = 'Soprano' | 'Contralto' | 'Tenor' | 'Baixo';