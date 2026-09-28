export interface KeyDefinition {
  id: string;
  nameRu: string;
  nameEn: string;
  nameGerman: string; // e.g. cis-moll, E-dur
  isMinor: boolean;
  notes: string[]; // English spellings, e.g. ["C", "D", "E", "F", "G", "A", "B"]
  pitchClasses: number[]; // 0-11, e.g. [0, 2, 4, 5, 7, 9, 11]
  accidentalsCount: number; // For filtering (e.g. up to 2 sharps/flats)
  accidentalsType: 'sharp' | 'flat' | 'none';
}

export interface ChordDefinition {
  id: string;
  nameRu: string;
  nameEn: string;
  symbol: string;
  category: 'tonic' | 'subdominant' | 'dominant' | 'leading';
  scaleDegrees: number[]; // 1-indexed scale degrees, e.g., [1, 3, 5] for T5/3
  descriptionRu: string;
  descriptionEn: string;
  resolutionRu?: string;
  resolutionEn?: string;
}

export interface ChordSpelling {
  noteNamesEn: string[];
  noteNamesRu: string[];
  noteNamesGerman: string[]; // Added German spellings
  pitchClasses: number[];
  midiNumbers: number[]; // VOICED midi notes (from C3 to C6, i.e. 48 to 84)
}

// All 24 keys with classical spelling and correct accidentals
export const KEYS: KeyDefinition[] = [
  // Major keys
  {
    id: 'C_maj',
    nameRu: 'До мажор',
    nameEn: 'C Major',
    nameGerman: 'C-dur',
    isMinor: false,
    notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    pitchClasses: [0, 2, 4, 5, 7, 9, 11],
    accidentalsCount: 0,
    accidentalsType: 'none',
  },
  {
    id: 'G_maj',
    nameRu: 'Соль мажор',
    nameEn: 'G Major',
    nameGerman: 'G-dur',
    isMinor: false,
    notes: ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
    pitchClasses: [7, 9, 11, 0, 2, 4, 6],
    accidentalsCount: 1,
    accidentalsType: 'sharp',
  },
  {
    id: 'D_maj',
    nameRu: 'Ре мажор',
    nameEn: 'D Major',
    nameGerman: 'D-dur',
    isMinor: false,
    notes: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
    pitchClasses: [2, 4, 6, 7, 9, 11, 1],
    accidentalsCount: 2,
    accidentalsType: 'sharp',
  },
  {
    id: 'A_maj',
    nameRu: 'Ля мажор',
    nameEn: 'A Major',
    nameGerman: 'A-dur',
    isMinor: false,
    notes: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
    pitchClasses: [9, 11, 1, 2, 4, 6, 8],
    accidentalsCount: 3,
    accidentalsType: 'sharp',
  },
  {
    id: 'E_maj',
    nameRu: 'Ми мажор',
    nameEn: 'E Major',
    nameGerman: 'E-dur',
    isMinor: false,
    notes: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
    pitchClasses: [4, 6, 8, 9, 11, 1, 3],
    accidentalsCount: 4,
    accidentalsType: 'sharp',
  },
  {
    id: 'B_maj',
    nameRu: 'Си мажор',
    nameEn: 'B Major',
    nameGerman: 'H-dur',
    isMinor: false,
    notes: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
    pitchClasses: [11, 1, 3, 4, 6, 8, 10],
    accidentalsCount: 5,
    accidentalsType: 'sharp',
  },
  {
    id: 'Fsharp_maj',
    nameRu: 'Фа-диез мажор',
    nameEn: 'F# Major',
    nameGerman: 'Fis-dur',
    isMinor: false,
    notes: ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#'],
    pitchClasses: [6, 8, 10, 11, 1, 3, 5],
    accidentalsCount: 6,
    accidentalsType: 'sharp',
  },
  {
    id: 'F_maj',
    nameRu: 'Фа мажор',
    nameEn: 'F Major',
    nameGerman: 'F-dur',
    isMinor: false,
    notes: ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'],
    pitchClasses: [5, 7, 9, 10, 0, 2, 4],
    accidentalsCount: 1,
    accidentalsType: 'flat',
  },
  {
    id: 'Bb_maj',
    nameRu: 'Си-бемоль мажор',
    nameEn: 'Bb Major',
    nameGerman: 'B-dur',
    isMinor: false,
    notes: ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'],
    pitchClasses: [10, 0, 2, 3, 5, 7, 9],
    accidentalsCount: 2,
    accidentalsType: 'flat',
  },
  {
    id: 'Eb_maj',
    nameRu: 'Ми-бемоль мажор',
    nameEn: 'Eb Major',
    nameGerman: 'Es-dur',
    isMinor: false,
    notes: ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'],
    pitchClasses: [3, 5, 7, 8, 10, 0, 2],
    accidentalsCount: 3,
    accidentalsType: 'flat',
  },
  {
    id: 'Ab_maj',
    nameRu: 'Ля-бемоль мажор',
    nameEn: 'Ab Major',
    nameGerman: 'As-dur',
    isMinor: false,
    notes: ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'],
    pitchClasses: [8, 10, 0, 1, 3, 5, 7],
    accidentalsCount: 4,
    accidentalsType: 'flat',
  },
  {
    id: 'Db_maj',
    nameRu: 'Ре-бемоль мажор',
    nameEn: 'Db Major',
    nameGerman: 'Des-dur',
    isMinor: false,
    notes: ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C'],
    pitchClasses: [1, 3, 5, 6, 8, 10, 0],
    accidentalsCount: 5,
    accidentalsType: 'flat',
  },

  // Minor keys (with harmonic 7th scale degree naturally modified in calculations)
  {
    id: 'A_min',
    nameRu: 'Ля минор',
    nameEn: 'A Minor',
    nameGerman: 'a-moll',
    isMinor: true,
    notes: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], // 7th will be raised to G# for dominant/leading chords
    pitchClasses: [9, 11, 0, 2, 4, 5, 9], // base pitch classes
    accidentalsCount: 0,
    accidentalsType: 'none',
  },
  {
    id: 'E_min',
    nameRu: 'Ми минор',
    nameEn: 'E Minor',
    nameGerman: 'e-moll',
    isMinor: true,
    notes: ['E', 'F#', 'G', 'A', 'B', 'C', 'D'], // raised 7th is D#
    pitchClasses: [4, 6, 7, 9, 11, 0, 2],
    accidentalsCount: 1,
    accidentalsType: 'sharp',
  },
  {
    id: 'B_min',
    nameRu: 'Си минор',
    nameEn: 'B Minor',
    nameGerman: 'h-moll',
    isMinor: true,
    notes: ['B', 'C#', 'D', 'E', 'F#', 'G', 'A'], // raised 7th is A#
    pitchClasses: [11, 1, 2, 4, 6, 7, 9],
    accidentalsCount: 2,
    accidentalsType: 'sharp',
  },
  {
    id: 'Fsharp_min',
    nameRu: 'Фа-диез минор',
    nameEn: 'F# Minor',
    nameGerman: 'fis-moll',
    isMinor: true,
    notes: ['F#', 'G#', 'A', 'B', 'C#', 'D', 'E'], // raised 7th is E#
    pitchClasses: [6, 8, 9, 11, 1, 2, 4],
    accidentalsCount: 3,
    accidentalsType: 'sharp',
  },
  {
    id: 'Csharp_min',
    nameRu: 'До-диез минор',
    nameEn: 'C# Minor',
    nameGerman: 'cis-moll',
    isMinor: true,
    notes: ['C#', 'D#', 'E', 'F#', 'G#', 'A', 'B'], // raised 7th is B#
    pitchClasses: [1, 3, 4, 6, 8, 9, 11],
    accidentalsCount: 4,
    accidentalsType: 'sharp',
  },
  {
    id: 'Gsharp_min',
    nameRu: 'Соль-диез минор',
    nameEn: 'G# Minor',
    nameGerman: 'gis-moll',
    isMinor: true,
    notes: ['G#', 'A#', 'B', 'C#', 'D#', 'E', 'F#'], // raised 7th is Fx
    pitchClasses: [8, 10, 11, 1, 3, 4, 6],
    accidentalsCount: 5,
    accidentalsType: 'sharp',
  },
  {
    id: 'D_min',
    nameRu: 'Ре минор',
    nameEn: 'D Minor',
    nameGerman: 'd-moll',
    isMinor: true,
    notes: ['D', 'E', 'F', 'G', 'A', 'Bb', 'C'], // raised 7th is C#
    pitchClasses: [2, 4, 5, 7, 9, 10, 0],
    accidentalsCount: 1,
    accidentalsType: 'flat',
  },
  {
    id: 'G_min',
    nameRu: 'Соль минор',
    nameEn: 'G Minor',
    nameGerman: 'g-moll',
    isMinor: true,
    notes: ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F'], // raised 7th is F#
    pitchClasses: [7, 9, 10, 0, 2, 3, 5],
    accidentalsCount: 2,
    accidentalsType: 'flat',
  },
  {
    id: 'C_min',
    nameRu: 'До минор',
    nameEn: 'C Minor',
    nameGerman: 'c-moll',
    isMinor: true,
    notes: ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb'], // raised 7th is B
    pitchClasses: [0, 2, 3, 5, 7, 8, 10],
    accidentalsCount: 3,
    accidentalsType: 'flat',
  },
  {
    id: 'F_min',
    nameRu: 'Фа минор',
    nameEn: 'F Minor',
    nameGerman: 'f-moll',
    isMinor: true,
    notes: ['F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb'], // raised 7th is E
    pitchClasses: [5, 7, 8, 10, 0, 1, 3],
    accidentalsCount: 4,
    accidentalsType: 'flat',
  },
  {
    id: 'Bb_min',
    nameRu: 'Си-бемоль минор',
    nameEn: 'Bb Minor',
    nameGerman: 'b-moll',
    isMinor: true,
    notes: ['Bb', 'C', 'Db', 'Eb', 'F', 'Gb', 'Ab'], // raised 7th is A
    pitchClasses: [10, 0, 1, 3, 5, 6, 8],
    accidentalsCount: 5,
    accidentalsType: 'flat',
  },
];

// Clean Russian naming mapping
const RUSSIAN_BASE_NOTES: Record<string, string> = {
  'C': 'До',
  'D': 'Ре',
  'E': 'Ми',
  'F': 'Фа',
  'G': 'Соль',
  'A': 'Ля',
  'B': 'Си'
};

export function getRussianNoteName(englishNote: string): string {
  const base = englishNote[0];
  const acc = englishNote.slice(1);
  const baseRu = RUSSIAN_BASE_NOTES[base] || base;

  if (acc === '#') return `${baseRu}-диез`;
  if (acc === '##' || acc === 'x' || acc === 'Fx') return `${baseRu}-дубль-диез`;
  if (acc === 'b') return `${baseRu}-бемоль`;
  if (acc === 'bb') return `${baseRu}-дубль-бемоль`;
  return baseRu;
}

// German note naming mapping for classical music spelling
const GERMAN_BASE_NOTES: Record<string, string> = {
  'C': 'c',
  'D': 'd',
  'E': 'e',
  'F': 'f',
  'G': 'g',
  'A': 'a',
  'B': 'h'
};

export function getGermanNoteName(englishNote: string): string {
  const base = englishNote[0];
  const acc = englishNote.slice(1);
  
  if (englishNote === 'Bb') return 'b';
  if (englishNote === 'Bbb') return 'heses';

  const baseDe = GERMAN_BASE_NOTES[base] || base.toLowerCase();

  if (acc === '#') {
    return `${baseDe}is`;
  }
  if (acc === '##' || acc === 'x' || acc === 'Fx') {
    return `${baseDe}isis`;
  }
  if (acc === 'b') {
    if (base === 'E') return 'es';
    if (base === 'A') return 'as';
    return `${baseDe}es`;
  }
  if (acc === 'bb') {
    if (base === 'E') return 'eses';
    if (base === 'A') return 'ases';
    return `${baseDe}eses`;
  }
  return baseDe;
}

export const CHORDS: ChordDefinition[] = [
  // Tonic group
  {
    id: 't_53',
    nameRu: 'Тоническое трезвучие',
    nameEn: 'Tonic Triad',
    symbol: 'I53',
    category: 'tonic',
    scaleDegrees: [1, 3, 5],
    descriptionRu: 'Строится на I ступени. Является основой тональности, звучит устойчиво и завершенно.',
    descriptionEn: 'Built on the 1st scale degree. The foundation of the key, sounding stable and resolved.',
    resolutionRu: 'Устойчивый аккорд, не требует разрешения.',
    resolutionEn: 'Stable chord, requires no resolution.',
  },
  {
    id: 't_6',
    nameRu: 'Тонический секстаккорд',
    nameEn: 'Tonic Sextachord',
    symbol: 'I6',
    category: 'tonic',
    scaleDegrees: [3, 5, 8],
    descriptionRu: 'Первое обращение тонического трезвучия. Строится на III ступени. Звучит легко и прозрачно.',
    descriptionEn: 'First inversion of the tonic triad. Built on the 3rd scale degree. Sounds light and open.',
    resolutionRu: 'Устойчивый аккорд, не требует разрешения.',
    resolutionEn: 'Stable chord, requires no resolution.',
  },
  {
    id: 't_64',
    nameRu: 'Тонический квартсекстаккорд',
    nameEn: 'Tonic Quartsextachord',
    symbol: 'I64',
    category: 'tonic',
    scaleDegrees: [5, 8, 10],
    descriptionRu: 'Второе обращение тонического трезвучия. Строится на V ступени. В кадансах имеет сильное доминантовое тяготение.',
    descriptionEn: 'Second inversion of the tonic triad. Built on the 5th scale degree. Often used in cadences with strong dominant tension.',
    resolutionRu: 'Устойчив сам по себе, но в кадансовом контексте (К6/4) обычно разрешается в доминантовое трезвучие.',
    resolutionEn: 'Stable on its own, but in a cadential context (K6/4) typically resolves directly to the dominant triad.',
  },

  // Subdominant group
  {
    id: 'ii_53',
    nameRu: 'Трезвучие II ступени',
    nameEn: 'Supertonic Triad',
    symbol: 'II53',
    category: 'subdominant',
    scaleDegrees: [2, 4, 6],
    descriptionRu: 'Строится на II ступени. Побочное субдоминантовое трезвучие, часто применяется для подготовки доминанты.',
    descriptionEn: 'Built on the 2nd scale degree. Secondary subdominant triad, often used to prepare the dominant.',
    resolutionRu: 'Обычно переходит в доминанту (II -> V) или разрешается через K6/4.',
    resolutionEn: 'Typically moves to the dominant (ii -> V) or resolves via cadential 6/4.',
  },
  {
    id: 'ii_6',
    nameRu: 'Секстаккорд II ступени',
    nameEn: 'Supertonic Sextachord',
    symbol: 'II6',
    category: 'subdominant',
    scaleDegrees: [4, 6, 9],
    descriptionRu: 'Первое обращение трезвучия II ступени. Строится на IV ступени. Сильный предкадансовый аккорд.',
    descriptionEn: 'First inversion of the supertonic triad. Built on the 4th scale degree. A strong pre-cadential chord.',
    resolutionRu: 'Переходит в K6/4 или в доминантовое трезвучие (бас делает шаг в V ступень).',
    resolutionEn: 'Moves to K6/4 or directly to the dominant triad (the bass steps to V).',
  },
  {
    id: 's_53',
    nameRu: 'Субдоминантовое трезвучие',
    nameEn: 'Subdominant Triad',
    symbol: 'IV53',
    category: 'subdominant',
    scaleDegrees: [4, 6, 8],
    descriptionRu: 'Строится на IV ступени. Обладает мягким, уводящим от тоники характером.',
    descriptionEn: 'Built on the 4th scale degree. Possesses a warm, expansive subdominant character.',
    resolutionRu: 'Обычно переходит в доминанту (S -> D) или разрешается напрямую в тонику (плагальный оборот).',
    resolutionEn: 'Typically moves to the dominant (S -> D) or resolves directly to the tonic (plagal resolution).',
  },
  {
    id: 's_6',
    nameRu: 'Субдоминантовый секстаккорд',
    nameEn: 'Subdominant Sextachord',
    symbol: 'IV6',
    category: 'subdominant',
    scaleDegrees: [6, 8, 11],
    descriptionRu: 'Первое обращение субдоминантового трезвучия. Строится на VI ступени. Очень мягкий аккорд.',
    descriptionEn: 'First inversion of the subdominant triad. Built on the 6th scale degree.',
    resolutionRu: 'Разрешается в тонический квартсекстаккорд или переходит в доминантовые созвучия.',
    resolutionEn: 'Resolves to the tonic quartsextachord or transitions to dominant chords.',
  },
  {
    id: 's_64',
    nameRu: 'Субдоминантовый квартсекстаккорд',
    nameEn: 'Subdominant Quartsextachord',
    symbol: 'IV64',
    category: 'subdominant',
    scaleDegrees: [8, 11, 13],
    descriptionRu: 'Второе обращение субдоминантового трезвучия. Строится на I ступени.',
    descriptionEn: 'Second inversion of the subdominant triad. Built on the 1st scale degree.',
    resolutionRu: 'Обычно разрешается в тоническое трезвучие на месте (плагальное разрешение).',
    resolutionEn: 'Typically resolves directly to the tonic triad (plagal cadence).',
  },

  // Dominant group
  {
    id: 'd_53',
    nameRu: 'Доминантовое трезвучие',
    nameEn: 'Dominant Triad',
    symbol: 'V53',
    category: 'dominant',
    scaleDegrees: [5, 7, 9],
    descriptionRu: 'Строится на V ступени. Обладает ярким, активным тяготением в тонику. В миноре всегда используется гармоническая (повышенная) VII ступень.',
    descriptionEn: 'Built on the 5th scale degree. Possesses a bright, active tension that pulls strongly toward the tonic. Uses the raised 7th degree in minor.',
    resolutionRu: 'Разрешается в тоническое трезвучие (V -> I, VII -> I, II -> I или III).',
    resolutionEn: 'Resolves directly to the tonic triad.',
  },
  {
    id: 'd_6',
    nameRu: 'Доминантовый секстаккорд',
    nameEn: 'Dominant Sextachord',
    symbol: 'V6',
    category: 'dominant',
    scaleDegrees: [7, 9, 12],
    descriptionRu: 'Первое обращение доминантового трезвучия. Строится на VII ступени (повышенной в миноре). Бас (VII) крайне неустойчив.',
    descriptionEn: 'First inversion of the dominant triad. Built on the 7th scale degree (raised in minor). The bass is highly unstable.',
    resolutionRu: 'Разрешается в тоническое трезвучие, при этом бас (VII ступень) идет вверх в тонику (I).',
    resolutionEn: 'Resolves to the tonic triad, with the bass (7th scale degree) ascending to the tonic (1st scale degree).',
  },
  {
    id: 'd_64',
    nameRu: 'Доминантовый квартсекстаккорд',
    nameEn: 'Dominant Quartsextachord',
    symbol: 'V64',
    category: 'dominant',
    scaleDegrees: [9, 12, 14],
    descriptionRu: 'Второе обращение доминантового трезвучия. Строится на II ступени.',
    descriptionEn: 'Second inversion of the dominant triad. Built on the 2nd scale degree.',
    resolutionRu: 'Разрешается в тоническое трезвучие (обычно с удвоением основного тона).',
    resolutionEn: 'Resolves directly to the tonic triad.',
  },
  {
    id: 'd_7',
    nameRu: 'Доминантовый септаккорд',
    nameEn: 'Dominant Seventh',
    symbol: 'V7',
    category: 'dominant',
    scaleDegrees: [5, 7, 9, 11],
    descriptionRu: 'Главный неустойчивый септаккорд. Строится на V ступени. Состоит из мажорного трезвучия и малой терции сверху (малый мажорный септаккорд).',
    descriptionEn: 'The primary unstable seventh chord. Built on the 5th scale degree. Consists of a major triad with a minor third on top.',
    resolutionRu: 'Разрешается в неполное тоническое трезвучие с утроенной тоникой (I, I, I, III).',
    resolutionEn: 'Resolves to an incomplete tonic triad with a tripled root (1, 1, 1, 3).',
  },
  {
    id: 'd_65',
    nameRu: 'Доминантовый квинтсекстаккорд',
    nameEn: 'Dominant Quintsextachord',
    symbol: 'V65',
    category: 'dominant',
    scaleDegrees: [7, 9, 11, 12],
    descriptionRu: 'Первое обращение доминантового септаккорда. Строится на VII ступени (повышенной в миноре).',
    descriptionEn: 'First inversion of the dominant seventh chord. Built on the 7th scale degree (raised in minor).',
    resolutionRu: 'Разрешается в полное тоническое трезвучие с удвоением тоники (I, I, III, V).',
    resolutionEn: 'Resolves to a complete tonic triad with doubled root (1, 1, 3, 5).',
  },
  {
    id: 'd_43',
    nameRu: 'Доминантовый терцквартаккорд',
    nameEn: 'Dominant Terzquartchord',
    symbol: 'V43',
    category: 'dominant',
    scaleDegrees: [9, 11, 12, 14],
    descriptionRu: 'Второе обращение доминантового септаккорда. Строится на II ступени.',
    descriptionEn: 'Second inversion of the dominant seventh chord. Built on the 2nd scale degree.',
    resolutionRu: 'Разрешается в полное тоническое трезвучие (I, III, V, I).',
    resolutionEn: 'Resolves to a complete, balanced tonic triad (1, 3, 5, 1).',
  },
  {
    id: 'd_2',
    nameRu: 'Доминантовый секундаккорд',
    nameEn: 'Dominant Second-chord',
    symbol: 'V2',
    category: 'dominant',
    scaleDegrees: [11, 12, 14, 16],
    descriptionRu: 'Третье обращение доминантового септаккорда. Строится на IV ступени. Бас (IV ступень) очень активно тянется вниз.',
    descriptionEn: 'Third inversion of the dominant seventh chord. Built on the 4th scale degree. The bass (4th) has a strong gravitational pull downward.',
    resolutionRu: 'Разрешается в тонический секстаккорд с удвоением тоники (III, I, I, V). Бас идет на ступень вниз в III.',
    resolutionEn: 'Resolves to the tonic sextachord with a doubled root (3, 1, 1, 5). The bass steps down to the 3rd degree.',
  },

  // Leading & Secondary group
  {
    id: 'vii_dim_7',
    nameRu: 'Уменьшенный вводный септаккорд',
    nameEn: 'Diminished Seventh',
    symbol: 'ум.VII7',
    category: 'leading',
    scaleDegrees: [7, 9, 11, 13],
    descriptionRu: 'Строится на VII ступени. Состоит исключительно из малых терций. Обладает высочайшим драматическим напряжением. В мажоре строится в гармоническом виде.',
    descriptionEn: 'Built on the 7th scale degree. Consists entirely of minor thirds. Highly dramatic and expressive. Formed in harmonic major with a flat 6th.',
    resolutionRu: 'Разрешается в тоническое трезвучие с удвоением терцового тона (I, III, III, V), чтобы избежать параллельных квинт.',
    resolutionEn: 'Resolves to the tonic triad with a doubled third (1, 3, 3, 5) to avoid parallel fifths.',
  },
  {
    id: 'vii_half_dim_7',
    nameRu: 'Малый вводный септаккорд',
    nameEn: 'Half-Diminished Seventh',
    symbol: 'м.VII7',
    category: 'leading',
    scaleDegrees: [7, 9, 11, 13],
    descriptionRu: 'Строится на VII ступени натурального мажора. Состоит из уменьшенного трезвучия и большой терции сверху.',
    descriptionEn: 'Built on the 7th scale degree of the natural major scale. Consists of a diminished triad with a major third on top.',
    resolutionRu: 'Разрешается в тоническое трезвучие с удвоением терцового тона.',
    resolutionEn: 'Resolves to the tonic triad with a doubled third.',
  },
  {
    id: 'ii_7',
    nameRu: 'Септаккорд II ступени',
    nameEn: 'Supertonic Seventh',
    symbol: 'II7',
    category: 'subdominant',
    scaleDegrees: [2, 4, 6, 8],
    descriptionRu: 'Главный субдоминантовый септаккорд. Строится на II ступени. В мажоре звучит как малый минорный, в миноре — как полууменьшенный.',
    descriptionEn: 'The primary subdominant seventh chord. Built on the 2nd scale degree. Acts as an excellent pre-dominant preparation.',
    resolutionRu: 'Обычно переходит во второе обращение доминантового септаккорда (D4/3) или разрешается непосредственно в тонический квартсекстаккорд.',
    resolutionEn: 'Typically transitions into a dominant inversion (like D4/3) or resolves directly to the tonic quartsextachord.',
  },
  {
    id: 'ii_65',
    nameRu: 'Квинтсекстаккорд II ступени',
    nameEn: 'Supertonic Quintsextachord',
    symbol: 'II65',
    category: 'subdominant',
    scaleDegrees: [4, 6, 8, 9],
    descriptionRu: 'Первое обращение септаккорда II ступени. Строится на IV ступени. Чрезвычайно употребителен перед кадансовым квартсекстаккордом (К6/4) или доминантой.',
    descriptionEn: 'First inversion of the supertonic seventh chord. Built on the 4th scale degree. Extremely common right before a cadential K6/4 or a dominant chord.',
    resolutionRu: 'Разрешается в кадансовый квартсекстаккорд или переходит напрямую в доминанту (бас остается на месте или шагает в V).',
    resolutionEn: 'Resolves to the cadential quartsextachord or goes directly to the dominant (the bass stays in place or moves to V).',
  }
];

// MIDI pitch offsets for semitones
const CHROMATIC_PITCHES: Record<string, number> = {
  'C': 0, 'C#': 1, 'Db': 1, 'D': 2, 'D#': 3, 'Eb': 3, 'E': 4, 'F': 5, 'F#': 6, 'Gb': 6,
  'G': 7, 'G#': 8, 'Ab': 8, 'A': 9, 'A#': 10, 'Bb': 10, 'B': 11, 'B#': 0, 'E#': 5, 'Fx': 8
};

// Help helper to shift a note name by semitones
function shiftNoteName(note: string, semitones: number): string {
  if (semitones === 0) return note;
  
  // Clean translation of basic accidental shifting
  const noteOrder = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  let currentPitch = CHROMATIC_PITCHES[note];
  if (currentPitch === undefined) currentPitch = 0;
  
  const targetPitch = (currentPitch + semitones + 12) % 12;
  
  // Try to preserve accidental logic based on the original note
  const isFlat = note.includes('b');
  const isSharp = note.includes('#');
  
  if (isFlat) {
    const flatSpellings: Record<number, string> = {
      0: 'C', 1: 'Db', 2: 'D', 3: 'Eb', 4: 'E', 5: 'F', 6: 'Gb', 7: 'G', 8: 'Ab', 9: 'A', 10: 'Bb', 11: 'B'
    };
    return flatSpellings[targetPitch] || noteOrder[targetPitch];
  } else if (isSharp || note === 'B' || note === 'E') {
    const sharpSpellings: Record<number, string> = {
      0: 'C', 1: 'C#', 2: 'D', 3: 'D#', 4: 'E', 5: 'F#', 6: 'F#', 7: 'G', 8: 'G#', 9: 'A', 10: 'A#', 11: 'B'
    };
    return sharpSpellings[targetPitch] || noteOrder[targetPitch];
  } else {
    // Normal spelling preference
    const naturalSpellings: Record<number, string> = {
      0: 'C', 1: 'C#', 2: 'D', 3: 'Eb', 4: 'E', 5: 'F', 6: 'F#', 7: 'G', 8: 'Ab', 9: 'A', 10: 'Bb', 11: 'B'
    };
    return naturalSpellings[targetPitch] || noteOrder[targetPitch];
  }
}

// Generates correct spelling and MIDI notes for piano display (C3 to C6, i.e., 48 to 84)
export function getChordSpelling(key: KeyDefinition, chord: ChordDefinition): ChordSpelling {
  const noteNamesEn: string[] = [];
  const noteNamesRu: string[] = [];
  const noteNamesGerman: string[] = [];
  const pitchClasses: number[] = [];
  const midiNumbers: number[] = [];

  // Determine key notes
  let scaleNotes = [...key.notes];
  let scalePitches = [...key.pitchClasses];

  // If Minor key, modify 7th scale degree to be HARMONIC (raised by 1 semitone)
  // for dominant/leading chords: D5/3, D6, D6/4, D7, D6/5, D4/3, D2, vii°7
  const isDominantOrLeading = chord.category === 'dominant' || chord.id === 'vii_dim_7';
  if (key.isMinor && isDominantOrLeading) {
    // Raise index 6 (7th degree)
    const seventhNote = scaleNotes[6];
    let raisedNote = seventhNote;
    if (seventhNote === 'G') raisedNote = 'G#';
    else if (seventhNote === 'D') raisedNote = 'D#';
    else if (seventhNote === 'A') raisedNote = 'A#';
    else if (seventhNote === 'E') raisedNote = 'E#';
    else if (seventhNote === 'B') raisedNote = 'B#';
    else if (seventhNote === 'F#') raisedNote = 'Fx';
    else if (seventhNote === 'C#') raisedNote = 'B#'; // or B sharp
    else if (seventhNote === 'C') raisedNote = 'C#';
    else if (seventhNote === 'F') raisedNote = 'F#';
    else if (seventhNote === 'Bb') raisedNote = 'A'; // raised Bb is B natural, or A sharp depending on context, let's keep it simple
    
    scaleNotes[6] = raisedNote;
    scalePitches[6] = (scalePitches[6] + 1) % 12;
  }

  // Iterate over scale degrees in the chord
  chord.scaleDegrees.forEach((degree, index) => {
    const scaleIndex = (degree - 1) % 7;
    const octaveOffset = Math.floor((degree - 1) / 7);

    let noteName = scaleNotes[scaleIndex];
    let pitch = scalePitches[scaleIndex];

    // Additional harmonic adjustments
    // 1. diminished 7th in Major keys (vii°7) requires flattening the 6th degree (the 4th note of vii°7)
    if (chord.id === 'vii_dim_7' && !key.isMinor && index === 3) {
      noteName = shiftNoteName(noteName, -1);
      pitch = (pitch - 1 + 12) % 12;
    }

    // Determine English, Russian, and German spellings
    noteNamesEn.push(noteName);
    noteNamesRu.push(getRussianNoteName(noteName));
    noteNamesGerman.push(getGermanNoteName(noteName));
    pitchClasses.push(pitch);
  });

  // Calculate voiced MIDI notes for piano.
  // We want the chord to fit comfortably in a one-octave or slightly wider range,
  // typically starting around G3 (55) to D4 (62) for the bass note.
  // Let's locate the root pitch class and find its corresponding piano key in C3-C5
  const rootPitch = pitchClasses[0];
  
  // Find a good bass MIDI note for the first pitch in range 50 to 62
  let bassMidi = 48 + rootPitch;
  while (bassMidi < 52) {
    bassMidi += 12;
  }
  while (bassMidi > 64) {
    bassMidi -= 12;
  }

  // Build the remaining notes sequentially in ascending pitch
  midiNumbers.push(bassMidi);
  let lastMidi = bassMidi;

  for (let i = 1; i < pitchClasses.length; i++) {
    const targetPitch = pitchClasses[i];
    let nextMidi = lastMidi + 1;
    while ((nextMidi % 12) !== targetPitch) {
      nextMidi++;
    }
    midiNumbers.push(nextMidi);
    lastMidi = nextMidi;
  }

  return {
    noteNamesEn,
    noteNamesRu,
    noteNamesGerman,
    pitchClasses,
    midiNumbers
  };
}

// 4-Part Harmony Voice Roles, Melodic Position & Spacing Types
export type ChordToneRole = 'prima' | 'tertia' | 'quinta' | 'septima';
export type MelodicPosition = 'prima' | 'tertia' | 'quinta' | 'septima';
export type Spacing = 'close' | 'wide' | 'mixed';

export interface VoiceDetails {
  note: string;
  de: string;
  ru: string;
  midi: number;
}

export interface VoicingDetails {
  soprano: VoiceDetails;
  alto: VoiceDetails;
  tenor: VoiceDetails;
  bass: VoiceDetails;
}

// Returns the role of each scale degree in the chord's definition
export function getChordScaleDegreeRoles(chordId: string): ChordToneRole[] {
  switch (chordId) {
    // Triads
    case 't_53': case 'ii_53': case 's_53': case 'd_53':
      return ['prima', 'tertia', 'quinta'];
    case 't_6': case 'ii_6': case 's_6': case 'd_6':
      return ['tertia', 'quinta', 'prima'];
    case 't_64': case 's_64': case 'd_64':
      return ['quinta', 'prima', 'tertia'];
    
    // Seventh chords
    case 'd_7': case 'vii_dim_7': case 'vii_half_dim_7': case 'ii_7':
      return ['prima', 'tertia', 'quinta', 'septima'];
    case 'd_65': case 'ii_65':
      return ['tertia', 'quinta', 'septima', 'prima'];
    case 'd_43':
      return ['quinta', 'septima', 'prima', 'tertia'];
    case 'd_2':
      return ['septima', 'prima', 'tertia', 'quinta'];
    
    default:
      return ['prima', 'tertia', 'quinta'];
  }
}

// Beautiful 4-Part Voicing Solver (Classical Harmony rules)
export function getFourPartVoicing(
  key: KeyDefinition,
  chord: ChordDefinition,
  mp: MelodicPosition,
  spacing: Spacing
): VoicingDetails {
  const spelling = getChordSpelling(key, chord);
  const roles = getChordScaleDegreeRoles(chord.id);

  const pitchForRole: Record<string, number> = {};
  const nameEnForRole: Record<string, string> = {};
  const nameRuForRole: Record<string, string> = {};
  const nameDeForRole: Record<string, string> = {};

  roles.forEach((role, i) => {
    pitchForRole[role] = spelling.pitchClasses[i];
    nameEnForRole[role] = spelling.noteNamesEn[i];
    nameRuForRole[role] = spelling.noteNamesRu[i];
    nameDeForRole[role] = spelling.noteNamesGerman[i];
  });

  const isSeventh = chord.scaleDegrees.length === 4;

  // Bass is always the first note of spelling (lowest note of inversion)
  const bassPitch = spelling.pitchClasses[0];
  let bassMidi = 36 + (bassPitch % 12); // start near octave 2
  while (bassMidi < 40) bassMidi += 12; // E2 is 40, normal comfortable bass range start
  while (bassMidi > 52) bassMidi -= 12; // E3 is 52, normal comfortable bass range end

  // Soprano pitch class based on Melodic Position (MP)
  const sopranoPitch = pitchForRole[mp] !== undefined ? pitchForRole[mp] : pitchForRole['prima'];
  
  const sopranoOctaves = [5, 4, 6]; // try octaves for Soprano to fit the spacing comfortably
  let finalSopranoMidi = 0;
  let finalAltoMidi = 0;
  let finalTenorMidi = 0;
  let success = false;

  for (const oct of sopranoOctaves) {
    const sopranoMidi = 12 * oct + (sopranoPitch % 12);
    
    // Determine the 2 pitch classes that must be distributed between Alto and Tenor
    let remainingPitches: number[] = [];
    if (!isSeventh) {
      // Triad: remaining are the other two pitches of the triad
      remainingPitches = spelling.pitchClasses.filter(p => (p % 12) !== (sopranoPitch % 12));
    } else {
      // Seventh chord:
      if ((sopranoPitch % 12) !== (bassPitch % 12)) {
        remainingPitches = spelling.pitchClasses.filter(
          p => (p % 12) !== (sopranoPitch % 12) && (p % 12) !== (bassPitch % 12)
        );
      } else {
        // Soprano and Bass are the same pitch (root is doubled, incomplete 7th chord)
        // Fifth is omitted, remaining are Third and Seventh
        const thirdPitch = pitchForRole['tertia'];
        const septimaPitch = pitchForRole['septima'];
        remainingPitches = [thirdPitch, septimaPitch];
      }
    }

    if (remainingPitches.length < 2) {
      // Safety fallback to make sure we have 2 distinct pitches
      remainingPitches = spelling.pitchClasses.filter(p => (p % 12) !== (sopranoPitch % 12));
      if (remainingPitches.length < 2) {
        remainingPitches = [ (sopranoPitch + 4) % 12, (sopranoPitch + 7) % 12 ];
      }
    }

    const pA = remainingPitches[0] % 12;
    const pB = remainingPitches[1] % 12;

    // Find candidate MIDI notes for Alto and Tenor below Soprano and above Bass
    const candidatesA: number[] = [];
    const candidatesB: number[] = [];

    for (let m = bassMidi + 1; m < sopranoMidi; m++) {
      if ((m % 12) === pA) candidatesA.push(m);
      if ((m % 12) === pB) candidatesB.push(m);
    }

    candidatesA.sort((a, b) => b - a);
    candidatesB.sort((a, b) => b - a);

    if (candidatesA.length === 0 || candidatesB.length === 0) {
      continue; // Try next octave if no notes are found in between
    }

    let altoMidi = 0;
    let tenorMidi = 0;

    if (spacing === 'close') {
      // Close spacing: Alto is the highest candidate below Soprano
      const maxA = candidatesA[0];
      const maxB = candidatesB[0];
      if (maxA > maxB) {
        altoMidi = maxA;
        const validB = candidatesB.filter(m => m < altoMidi);
        if (validB.length > 0) tenorMidi = validB[0];
      } else {
        altoMidi = maxB;
        const validA = candidatesA.filter(m => m < altoMidi);
        if (validA.length > 0) tenorMidi = validA[0];
      }
    } else if (spacing === 'wide') {
      // Wide spacing: Alto skips the absolute highest candidate, taking the second option if possible
      const allSorted = [...candidatesA, ...candidatesB].sort((a, b) => b - a);
      if (allSorted.length >= 2) {
        const secondHighest = allSorted[1];
        if ((secondHighest % 12) === pA) {
          altoMidi = secondHighest;
          const validB = candidatesB.filter(m => m < altoMidi);
          if (validB.length > 0) tenorMidi = validB[0];
        } else {
          altoMidi = secondHighest;
          const validA = candidatesA.filter(m => m < altoMidi);
          if (validA.length > 0) tenorMidi = validA[0];
        }
      } else {
        // Fallback if not enough candidates
        altoMidi = allSorted[0];
        if ((altoMidi % 12) === pA) {
          const validB = candidatesB.filter(m => m < altoMidi);
          if (validB.length > 0) tenorMidi = validB[0];
        } else {
          const validA = candidatesA.filter(m => m < altoMidi);
          if (validA.length > 0) tenorMidi = validA[0];
        }
      }
    } else {
      // Mixed: Alto is close (highest candidate), Tenor is wide (skips first option below Alto)
      const maxA = candidatesA[0];
      const maxB = candidatesB[0];
      if (maxA > maxB) {
        altoMidi = maxA;
        const validB = candidatesB.filter(m => m < altoMidi);
        if (validB.length >= 2) tenorMidi = validB[1];
        else if (validB.length > 0) tenorMidi = validB[0];
      } else {
        altoMidi = maxB;
        const validA = candidatesA.filter(m => m < altoMidi);
        if (validA.length >= 2) tenorMidi = validA[1];
        else if (validA.length > 0) tenorMidi = validA[0];
      }
    }

    // Verify correct placement order
    if (tenorMidi > bassMidi && altoMidi > tenorMidi && sopranoMidi > altoMidi) {
      finalSopranoMidi = sopranoMidi;
      finalAltoMidi = altoMidi;
      finalTenorMidi = tenorMidi;
      success = true;
      break;
    }
  }

  // Safety fallback if no combination satisfies the exact voice crossing constraints
  if (!success) {
    finalSopranoMidi = 60 + (sopranoPitch % 12);
    while (finalSopranoMidi < 64) finalSopranoMidi += 12;

    const pA = (pitchForRole['tertia'] ?? sopranoPitch) % 12;
    const pB = (pitchForRole['quinta'] ?? sopranoPitch) % 12;

    finalAltoMidi = finalSopranoMidi - 4;
    while ((finalAltoMidi % 12) !== pA && (finalAltoMidi % 12) !== pB) {
      finalAltoMidi--;
    }
    finalTenorMidi = finalAltoMidi - 4;
    while ((finalTenorMidi % 12) === (finalAltoMidi % 12) || ((finalTenorMidi % 12) !== pA && (finalTenorMidi % 12) !== pB)) {
      finalTenorMidi--;
    }
  }

  const getNoteDetails = (midi: number) => {
    const pc = midi % 12;
    let idx = spelling.pitchClasses.indexOf(pc);
    if (idx === -1) {
      idx = spelling.pitchClasses.findIndex(p => (p % 12) === pc);
    }
    
    let noteEn = 'C';
    let noteRu = 'До';
    let noteDe = 'c';

    if (idx !== -1) {
      noteEn = spelling.noteNamesEn[idx];
      noteRu = spelling.noteNamesRu[idx];
      noteDe = spelling.noteNamesGerman[idx];
    } else {
      const noteNames = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];
      noteEn = noteNames[pc];
      noteRu = getRussianNoteName(noteEn);
      noteDe = getGermanNoteName(noteEn);
    }

    const oct = Math.floor(midi / 12) - 1;
    // Russian octave naming for clarity
    let octRu = '';
    if (oct === 2) octRu = 'малая окт.';
    else if (oct === 3) octRu = '1-я окт.';
    else if (oct === 4) octRu = '2-я окт.';
    else if (oct === 5) octRu = '3-я окт.';
    else octRu = `${oct} окт.`;

    return {
      note: `${noteEn}${oct}`,
      de: `${noteDe}${oct}`,
      ru: `${noteRu} (${octRu})`,
      midi
    };
  };

  return {
    soprano: getNoteDetails(finalSopranoMidi),
    alto: getNoteDetails(finalAltoMidi),
    tenor: getNoteDetails(finalTenorMidi),
    bass: getNoteDetails(bassMidi)
  };
}

// Generate a random exercise matching selected chords and keys
export interface Exercise {
  id: string;
  key: KeyDefinition;
  chord: ChordDefinition;
  spelling: ChordSpelling;
  mp: MelodicPosition;
  spacing: Spacing;
  voicing: VoicingDetails;
  timestamp: number;
}

export function generateExercise(
  allowedChords: string[],
  allowedKeys: string[],
  allowedMPs: MelodicPosition[] = ['prima', 'tertia', 'quinta'],
  allowedSpacings: Spacing[] = ['close', 'wide', 'mixed']
): Exercise {
  // Fallbacks if lists are empty
  const chordsPool = CHORDS.filter(c => allowedChords.includes(c.id));
  const keysPool = KEYS.filter(k => allowedKeys.includes(k.id));

  const selectedChord = chordsPool.length > 0 
    ? chordsPool[Math.floor(Math.random() * chordsPool.length)]
    : CHORDS[0];

  const selectedKey = keysPool.length > 0 
    ? keysPool[Math.floor(Math.random() * keysPool.length)]
    : KEYS[0];

  // Specific rule: Half-diminished seventh (viiø7) only exists in Major keys
  let keyToUse = selectedKey;
  if (selectedChord.id === 'vii_half_dim_7' && keyToUse.isMinor) {
    // Swap with major key with same accidentals or C Major
    const majorKeys = KEYS.filter(k => !k.isMinor);
    keyToUse = majorKeys[Math.floor(Math.random() * majorKeys.length)];
  }

  // Determine allowed Melodic Positions (MP) for the selected chord
  const isSeventh = selectedChord.scaleDegrees.length === 4;
  const validMPs: MelodicPosition[] = ['prima', 'tertia', 'quinta'];
  if (isSeventh) {
    validMPs.push('septima');
  }

  // Filter with allowed MPs
  let mpPool = allowedMPs.filter(m => validMPs.includes(m));
  if (mpPool.length === 0) {
    mpPool = [validMPs[0]];
  }
  const selectedMP = mpPool[Math.floor(Math.random() * mpPool.length)];

  // Determine Spacing
  const spacingPool: Spacing[] = allowedSpacings.length > 0 ? allowedSpacings : ['close', 'wide'];
  const selectedSpacing = spacingPool[Math.floor(Math.random() * spacingPool.length)];

  const spelling = getChordSpelling(keyToUse, selectedChord);
  const voicing = getFourPartVoicing(keyToUse, selectedChord, selectedMP, selectedSpacing);

  return {
    id: Math.random().toString(36).substring(2, 9),
    key: keyToUse,
    chord: selectedChord,
    spelling,
    mp: selectedMP,
    spacing: selectedSpacing,
    voicing,
    timestamp: Date.now()
  };
}
