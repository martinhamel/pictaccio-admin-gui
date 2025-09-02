import { ContextIndex } from '@pictaccio/admin-gui/src/core/types/context_index';

export type NamedContextIndex<T> = { [key: string]: ContextIndex<T> };
