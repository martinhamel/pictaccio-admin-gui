import { SubjectColMappings } from '@pictaccio/admin-gui/core/subject_col_mapping';
import { SubjectData } from '@pictaccio/admin-gui/core/types/subject_data';

export function mapColumns(data: Record<string, string>[], mappings: SubjectColMappings): SubjectData[] {
    return data.map(line => {
        const obj = {};

        for (const [newProp, oldProp] of Object.entries(mappings)) {
            obj[newProp] = line[oldProp];
        }

        return {
            ...line,
            ...obj
        };
    }) as SubjectData[];
}
