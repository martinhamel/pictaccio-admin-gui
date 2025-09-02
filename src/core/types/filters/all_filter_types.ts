import { FilterTypeAssignee } from '@pictaccio/admin-gui/src/core/types/filters/type_assignee';
import { FilterTypeBoolean } from '@pictaccio/admin-gui/src/core/types/filters/type_boolean';
import { FilterTypeDate } from '@pictaccio/admin-gui/src/core/types/filters/type_date';
import { FilterTypeDateWithPreset } from '@pictaccio/admin-gui/src/core/types/filters/type_date_with_preset';
import { FilterTypeMainText } from '@pictaccio/admin-gui/src/core/types/filters/type_main_text';
import { FilterTypeMultiList } from '@pictaccio/admin-gui/src/core/types/filters/type_multi_list';
import { FilterTypeSlider } from '@pictaccio/admin-gui/src/core/types/filters/type_slider';
import { FilterTypeTag } from '@pictaccio/admin-gui/src/core/types/filters/type_tag';
import { FilterTypeText } from '@pictaccio/admin-gui/src/core/types/filters/type_text';

export type AllFilterTypes =
    FilterTypeAssignee |
    FilterTypeBoolean |
    FilterTypeDate |
    FilterTypeDateWithPreset |
    FilterTypeMainText |
    FilterTypeMultiList |
    FilterTypeSlider |
    FilterTypeTag |
    FilterTypeText;
