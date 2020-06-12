import { ORDER_BOOK_DEFAULT_SIDE_LIMIT, STORAGE_DEFAULT_LIMIT } from '../constants';
import { Config } from './types';

export const defaultConfig: Config = {
    api: {
        authUrl: '',
        tradeUrl: '',
        applogicUrl: '',
        rangerUrl: '',
        arkeUrl: '',
        finexUrl: '',
    },
    minutesUntilAutoLogout: '5',
    rangerReconnectPeriod: '1',
    withCredentials: true,
    storage: {},
    gaTrackerKey: '',
    msAlertDisplayTime: '5000',
    incrementalOrderBook: false,
    finex: false,
    isResizable: false,
    isDraggable: false,
    languages: ['en'],
    sessionCheckInterval: '15000',
    balancesFetchInterval: '3000',
    passwordEntropyStep: 0,
};

export const Nutshell = {
    config: defaultConfig,
};

declare global {
    interface Window {
        env: Config;
    }
}

window.env = window.env || defaultConfig;
Nutshell.config = { ...window.env };
Nutshell.config.storage = Nutshell.config.storage || {};

export const tradeUrl = () => Nutshell.config.api.tradeUrl;
export const arkeUrl = () => Nutshell.config.api.arkeUrl || tradeUrl();
export const authUrl = () => Nutshell.config.api.authUrl;
export const applogicUrl = () => Nutshell.config.api.applogicUrl;
export const rangerUrl = () => Nutshell.config.api.rangerUrl;
export const finexUrl = () => Nutshell.config.api.finexUrl || tradeUrl();
export const minutesUntilAutoLogout = (): string => Nutshell.config.minutesUntilAutoLogout || '5';
export const withCredentials = () => Nutshell.config.withCredentials;
export const defaultStorageLimit = () => Nutshell.config.storage.defaultStorageLimit || STORAGE_DEFAULT_LIMIT;
export const orderBookSideLimit = () => Nutshell.config.storage.orderBookSideLimit || ORDER_BOOK_DEFAULT_SIDE_LIMIT;
export const gaTrackerKey = (): string => Nutshell.config.gaTrackerKey || '';
export const msAlertDisplayTime = (): string => Nutshell.config.msAlertDisplayTime || '5000';
export const rangerReconnectPeriod = (): number => Nutshell.config.rangerReconnectPeriod ? Number(Nutshell.config.rangerReconnectPeriod) : 1;
export const incrementalOrderBook = (): boolean => Nutshell.config.incrementalOrderBook || false;
export const isResizableGrid = ():boolean => Nutshell.config.isResizable || false;
export const isDraggableGrid = ():boolean => Nutshell.config.isDraggable || false;
export const languages = Nutshell.config.languages && Nutshell.config.languages.length > 0 ? Nutshell.config.languages : ['en'];
export const sessionCheckInterval = (): string => Nutshell.config.sessionCheckInterval || '15000';
export const balancesFetchInterval = (): string => Nutshell.config.balancesFetchInterval || '3000';
export const isFinexEnabled = (): boolean => Nutshell.config.finex || false;
export const passwordEntropyStep = ():number => Nutshell.config.passwordEntropyStep;
