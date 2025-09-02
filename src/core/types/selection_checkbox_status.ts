export type SelectionCheckboxStatus = 'all' | 'partial' | 'none';

export type SelectionCheckboxStatusEmit = {
    name: string;
    checkedStatus: SelectionCheckboxStatus;
};
