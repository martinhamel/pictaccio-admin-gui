<style lang="scss" scoped>
@import '@pictaccio/admin-gui/src/scss/activities';

.expose-code-snippet {
    grid-column: 1 / -1;
    display: grid;
    gap: $grid-gap;

    p {
        margin-top: 0;
    }

    label {
        margin: 2rem 0 0.5rem;
    }
}
</style>

<template>
    <div class="activity-control">
        <h2 class="h5">{{ $t(`activities.exposeCodeSnippet.title`) }}</h2>
        <div class="expose-code-snippet">
            <p>{{ $t(`activities.exposeCodeSnippet.description`) }}</p>
            <div>
                <label>{{ $t(`activities.exposeCodeSnippet.label.head`) }}</label>
                <code-snippet id="code-snippet-head"
                              :inputName="'injectPreHead'"
                              :value="injectPreHead">
                    {{ injectPreHead }}
                </code-snippet>
                <label>{{ $t(`activities.exposeCodeSnippet.label.body`) }}</label>
                <code-snippet id="code-snippet-body"
                              :inputName="'injectPreBody'"
                              :value="injectPreBody">
                    {{ injectPreBody }}
                </code-snippet>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { camelize } from '@loufa/loufairy';
import AdminActivities from '@pictaccio/admin-gui/src/views/private/activities/companions/admin_activities';
import CodeSnippet from '@pictaccio/admin-gui/src/views/private/activities/companions/CodeSnippet.vue';
import DocsLink from '@pictaccio/admin-gui/src/views/private/activities/companions/DocsLink.vue';

@Component({
    name: 'Expose Code Snippet',
    components: {
        FontAwesomeIcon,
        CodeSnippet,
        DocsLink
    }
})
export default class ExposeCodeSnippet extends AdminActivities {
    private injectPreBody = // will inject '<' and '>' and will keep tabs and lines breaks
        `<div class="phone-number">
    <h3 class="h6">
        {{ $t('activities.publicInfos.phone.title') }}<span
        v-if="photographInfo.phoneNumbers.length >= 2">s</span>
    </h3>
    <span class="text-large" v-for="numbers in photographInfo.phoneNumbers" :key="numbers">
        <b v-if="numbers.definition === 'tollFree'">{{ $t(generic.def') }}:</b>
        <b v-else>{{ numbers.definition }}:</b>
        <span>{{ numbers.number }}</span>
    </span>
</div>`;
    private injectPreHead =
        '<link rel="icon" href="<%= BASE_URL %>favicon.ico">'

    public camelize: (input: string, pascal: boolean) => string = camelize;
    /* LIFECYCLE */

    /* EVENT HANDLERS */
}
</script>
