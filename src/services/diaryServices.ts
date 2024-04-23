import { DiaryEntry, NonSensitiveInfoDiaryEntry } from "../types";
import diaryData from "./diaries.json";

const DIARIES: DiaryEntry[] = diaryData as DiaryEntry[];

export const getEntries = (): DiaryEntry[] => DIARIES;

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
    return DIARIES.map(({ id, date, weather, visibility }) => {
        return {
            id,
            date,
            weather,
            visibility
        }
    })
}

export const addEntry = () => null;
