'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, ArrowRight, Settings, Sliders, Check } from 'lucide-react';
import {
  KEYS,
  CHORDS,
  generateExercise,
  Exercise,
  MelodicPosition,
  Spacing
} from '../lib/musicTheory';

// Labels in Russian for Melodic Positions and Spacings
const MP_LABELS: Record<MelodicPosition, { name: string; desc: string }> = {
  prima: { name: 'Прима', desc: 'В верхнем голосе (сопрано) звучит основной тон аккорда.' },
  tertia: { name: 'Терция', desc: 'В верхнем голосе (сопрано) звучит терцовый тон аккорда.' },
  quinta: { name: 'Квинта', desc: 'В верхнем голосе (сопрано) звучит квинтовый тон аккорда.' },
  septima: { name: 'Септима', desc: 'В верхнем голосе (сопрано) звучит септима.' }
};

const SPACING_LABELS: Record<Spacing, { name: string; desc: string }> = {
  close: { name: 'Тесное', desc: 'Интервалы между сопрано, альтом и тенором не превышают кварты.' },
  wide: { name: 'Широкое', desc: 'Интервалы между сопрано, альтом и тенором составляют квинту, сексту или октаву.' },
  mixed: { name: 'Смешанное', desc: 'Сочетание тесного и широкого расположения в верхних голосах.' }
};

export default function ClavierTrainer() {
  const allChords = CHORDS;
  const allKeys = KEYS;

  // Selected filters in state
  const [allowedChordIds, setAllowedChordIds] = useState<string[]>(() => CHORDS.map(c => c.id));
  const [allowedKeyIds, setAllowedKeyIds] = useState<string[]>(() => KEYS.map(k => k.id));
  const [allowedMPs, setAllowedMPs] = useState<MelodicPosition[]>(['prima', 'tertia', 'quinta', 'septima']);
  const [allowedSpacings, setAllowedSpacings] = useState<Spacing[]>(['close', 'wide', 'mixed']);

  // Settings drawer state
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Current exercise
  const [exercise, setExercise] = useState<Exercise>(() => 
    generateExercise(
      CHORDS.map(c => c.id),
      KEYS.map(k => k.id),
      ['prima', 'tertia', 'quinta', 'septima'],
      ['close', 'wide', 'mixed']
    )
  );

  // Generate next task with currently allowed options
  const handleNextExercise = () => {
    const nextEx = generateExercise(
      allowedChordIds.length > 0 ? allowedChordIds : allChords.map(c => c.id),
      allowedKeyIds.length > 0 ? allowedKeyIds : allKeys.map(k => k.id),
      allowedMPs.length > 0 ? allowedMPs : ['prima', 'tertia', 'quinta'],
      allowedSpacings.length > 0 ? allowedSpacings : ['close', 'wide']
    );
    setExercise(nextEx);
  };

  // Selection toggles
  const toggleKey = (id: string) => {
    setAllowedKeyIds(prev => 
      prev.includes(id) 
        ? (prev.length > 1 ? prev.filter(k => k !== id) : prev)
        : [...prev, id]
    );
  };

  const toggleChord = (id: string) => {
    setAllowedChordIds(prev => 
      prev.includes(id) 
        ? (prev.length > 1 ? prev.filter(c => c !== id) : prev)
        : [...prev, id]
    );
  };

  const toggleMP = (mp: MelodicPosition) => {
    setAllowedMPs(prev => 
      prev.includes(mp) 
        ? (prev.length > 1 ? prev.filter(m => m !== mp) : prev)
        : [...prev, mp]
    );
  };

  const toggleSpacing = (spacing: Spacing) => {
    setAllowedSpacings(prev => 
      prev.includes(spacing) 
        ? (prev.length > 1 ? prev.filter(s => s !== spacing) : prev)
        : [...prev, spacing]
    );
  };

  const handleSelectAllKeys = (select: boolean) => {
    if (select) {
      setAllowedKeyIds(allKeys.map(k => k.id));
    } else {
      setAllowedKeyIds([allKeys[0].id]); // keep at least one
    }
  };

  const handleSelectAllChords = (select: boolean) => {
    if (select) {
      setAllowedChordIds(allChords.map(c => c.id));
    } else {
      setAllowedChordIds([allChords[0].id]);
    }
  };

  // Render subscription symbols beautifully (e.g. V7, I64)
  const renderRomanSymbol = (symbol: string) => {
    const subscripts: Record<string, string> = {
      '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄',
      '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉'
    };
    
    let base = '';
    let figures = '';
    const firstDigitIndex = symbol.search(/\d/);
    if (firstDigitIndex !== -1) {
      base = symbol.substring(0, firstDigitIndex);
      figures = symbol.substring(firstDigitIndex).split('').map(char => subscripts[char] || char).join('');
    } else {
      base = symbol;
    }
    
    return (
      <span className="font-serif font-extrabold tracking-normal text-slate-100">
        {base}
        <sub className="text-3xl font-sans font-extrabold align-baseline relative bottom-[-0.05em] ml-0.5 text-amber-500">{figures}</sub>
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-start p-4 md:p-6 font-sans relative selection:bg-amber-500 selection:text-slate-950 overflow-y-auto">
      
      {/* Visual Ambient Blur Backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-amber-500/5 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-500/5 rounded-full filter blur-[140px] pointer-events-none" />

      {/* Header */}
      <header className="w-full max-w-4xl flex items-center justify-between border-b border-slate-900/80 pb-4 mb-6 z-10 shrink-0">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-amber-500/20 to-amber-500/5 text-amber-400 rounded-xl border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
            <Music className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
              Клавир • Гармония
            </h1>
            <p className="text-[10px] text-slate-500 font-medium tracking-wide uppercase">
              Тренажер четырехголосного расположения аккордов
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsSettingsOpen(!isSettingsOpen)}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border cursor-pointer ${
            isSettingsOpen 
              ? 'bg-amber-500 border-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.25)]' 
              : 'bg-slate-900/60 border-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-900/90'
          }`}
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>Настройки</span>
        </button>
      </header>

      <main className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-6 items-start z-10 flex-1 pb-12">
        
        {/* Settings panel */}
        <AnimatePresence mode="popLayout">
          {isSettingsOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="md:col-span-5 flex flex-col gap-5 bg-slate-900/95 border border-slate-800/60 rounded-3xl p-6 shadow-2xl backdrop-blur-xl overflow-hidden self-stretch"
            >
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <span className="text-xs uppercase font-bold tracking-widest text-slate-400 flex items-center gap-1.5">
                  <Settings className="w-3.5 h-3.5 text-amber-500" />
                  Параметры практики
                </span>
                <span className="text-[10px] font-mono text-slate-500 bg-slate-800/40 border border-slate-800/50 px-2 py-0.5 rounded-md">
                  Фильтры
                </span>
              </div>

              {/* 1. Spacing Selection */}
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Расположение (Spacing)
                </span>
                <div className="grid grid-cols-3 gap-1.5">
                  {(Object.keys(SPACING_LABELS) as Spacing[]).map(s => {
                    const active = allowedSpacings.includes(s);
                    return (
                      <button
                        key={s}
                        onClick={() => toggleSpacing(s)}
                        className={`py-2 px-1 text-xs font-semibold rounded-lg border transition-all text-center flex flex-col items-center justify-center gap-0.5 cursor-pointer ${
                          active
                            ? 'bg-amber-500/10 border-amber-500/40 text-amber-400 font-bold'
                            : 'bg-slate-900 border-slate-800/80 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <span className="text-[11px]">{SPACING_LABELS[s].name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Melodic Position Selection */}
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Мелодическое положение (МП)
                </span>
                <div className="grid grid-cols-2 gap-1.5">
                  {(Object.keys(MP_LABELS) as MelodicPosition[]).map(m => {
                    const active = allowedMPs.includes(m);
                    return (
                      <button
                        key={m}
                        onClick={() => toggleMP(m)}
                        className={`py-2 px-2 text-xs font-semibold rounded-lg border transition-all flex items-center justify-between cursor-pointer ${
                          active
                            ? 'bg-amber-500/10 border-amber-500/40 text-amber-400 font-bold'
                            : 'bg-slate-900 border-slate-800/80 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <span>{MP_LABELS[m].name}</span>
                        {active && <Check className="w-3 h-3 text-amber-500" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Chords Filter */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Аккорды ({allowedChordIds.length})
                  </span>
                  <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider">
                    <button onClick={() => handleSelectAllChords(true)} className="text-amber-500 hover:text-amber-400 cursor-pointer">Все</button>
                    <span className="text-slate-600">|</span>
                    <button onClick={() => handleSelectAllChords(false)} className="text-slate-500 hover:text-slate-400 cursor-pointer">Сброс</button>
                  </div>
                </div>
                <div className="max-h-36 overflow-y-auto pr-1 flex flex-col gap-1 border border-slate-800/50 bg-slate-950/40 p-2 rounded-xl custom-scrollbar">
                  {allChords.map(c => {
                    const active = allowedChordIds.includes(c.id);
                    return (
                      <button
                        key={c.id}
                        onClick={() => toggleChord(c.id)}
                        className={`w-full py-1.5 px-2.5 rounded-lg text-left text-xs font-medium border flex items-center justify-between transition-all cursor-pointer ${
                          active
                            ? 'bg-amber-500/5 border-amber-500/20 text-amber-400'
                            : 'bg-transparent border-transparent text-slate-500 hover:text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] bg-slate-800/60 text-slate-300 px-1.5 py-0.5 rounded">
                            {c.symbol}
                          </span>
                          <span className="truncate max-w-[130px]">{c.nameRu}</span>
                        </div>
                        {active && <Check className="w-3.5 h-3.5 text-amber-500" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 4. Keys Filter */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Тональности ({allowedKeyIds.length})
                  </span>
                  <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider">
                    <button onClick={() => handleSelectAllKeys(true)} className="text-amber-500 hover:text-amber-400 cursor-pointer">Все</button>
                    <span className="text-slate-600">|</span>
                    <button onClick={() => handleSelectAllKeys(false)} className="text-slate-500 hover:text-slate-400 cursor-pointer">Сброс</button>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-1 max-h-32 overflow-y-auto p-2 bg-slate-950/40 rounded-xl border border-slate-800/50 custom-scrollbar">
                  {allKeys.map(k => {
                    const active = allowedKeyIds.includes(k.id);
                    return (
                      <button
                        key={k.id}
                        onClick={() => toggleKey(k.id)}
                        className={`py-1 text-[11px] font-mono font-semibold rounded-md border text-center transition-all cursor-pointer ${
                          active
                            ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                            : 'bg-transparent border-transparent text-slate-500 hover:text-slate-300'
                        }`}
                      >
                        {k.nameGerman}
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main interactive Card */}
        <div className={`flex flex-col gap-6 ${isSettingsOpen ? 'md:col-span-7' : 'md:col-span-12 max-w-xl mx-auto'} transition-all duration-300 w-full`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={exercise.id}
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="bg-slate-900/90 border border-slate-800/80 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl overflow-hidden flex flex-col w-full"
            >
              <div className="h-1.5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600" />
              
              <div className="p-6 md:p-8 flex flex-col gap-6">
                
                {/* Task Heading */}
                <div className="flex items-center justify-between border-b border-slate-800/50 pb-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <span>Режим четырехголосия</span>
                    <span aria-hidden="true" className="text-slate-700">·</span>
                    <span className="text-amber-500 font-semibold uppercase tracking-wider text-[11px]">
                      {exercise.key.isMinor ? 'Минор' : 'Мажор'}
                    </span>
                  </div>
                  
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 italic">
                    {exercise.chord.category}
                  </span>
                </div>

                {/* Primary Information */}
                <div className="flex flex-col gap-6">
                  
                  {/* Big Tonality & Symbol */}
                  <div className="flex flex-col gap-4 text-center justify-center py-4 border-b border-slate-800/30">
                    <div className="flex flex-col">
                      <span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">
                        Тональность
                      </span>
                      <h2 className="text-4xl font-serif font-extrabold tracking-wide text-amber-400 mt-1">
                        {exercise.key.nameGerman}
                      </h2>
                      <span className="text-xs text-slate-400 mt-0.5 font-medium">
                        ({exercise.key.nameRu})
                      </span>
                    </div>

                    <div className="flex flex-col gap-1 mt-2">
                      <span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">
                        Аккорд
                      </span>
                      <div className="text-5xl font-serif my-2 select-none">
                        {renderRomanSymbol(exercise.chord.symbol)}
                      </div>
                      <span className="text-sm text-slate-300 font-semibold">
                        {exercise.chord.nameRu}
                      </span>
                    </div>
                  </div>

                  {/* Conditions (MP and Spacing) */}
                  <div className="flex flex-col gap-4 bg-slate-950/40 border border-slate-800/80 p-5 rounded-2xl">
                    <div className="flex flex-col gap-1 border-b border-slate-900/60 pb-3">
                      <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                        Мелодическое положение (МП):
                      </span>
                      <span className="text-lg font-extrabold text-amber-400 tracking-wide mt-1">
                        {MP_LABELS[exercise.mp].name} <span className="text-slate-500 text-sm font-medium">({exercise.mp === 'prima' ? 'прима' : exercise.mp === 'tertia' ? 'терция' : exercise.mp === 'quinta' ? 'квинта' : 'септима'})</span>
                      </span>
                      <p className="text-[11px] text-slate-400 leading-normal">
                        {MP_LABELS[exercise.mp].desc}
                      </p>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                        Расположение:
                      </span>
                      <span className="text-lg font-extrabold text-emerald-400 tracking-wide mt-1">
                        {SPACING_LABELS[exercise.spacing].name} располож.
                      </span>
                      <p className="text-[11px] text-slate-400 leading-normal">
                        {SPACING_LABELS[exercise.spacing].desc}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Primary Control Buttons */}
                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={handleNextExercise}
                    className="w-full py-4 px-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold rounded-2xl transition-all duration-200 shadow-[0_4px_25px_rgba(245,158,11,0.25)] hover:shadow-[0_4px_30px_rgba(245,158,11,0.35)] flex items-center justify-center gap-2 select-none cursor-pointer text-base"
                  >
                    <span>Дальше</span>
                    <ArrowRight className="w-5 h-5 text-slate-950" />
                  </motion.button>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </main>
    </div>
  );
}
