import { objectType } from 'nexus/dist'

export const Default = objectType({
    name: 'Default',
    definition(t) {
        t.string('defaultType')
    },
})