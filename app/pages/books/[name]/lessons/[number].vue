<script setup lang="ts">
import { LessonText } from "@@/src/features/lesson"

const data = {
    title: "Dies in urbe ",
    translation: "День в городе",
    text: "Amīcus meus, Gāius, in urbē magnā habitat. Gāī fīlius, Quīntus, est puer laetus. Hodie, Quīntus et soror sua, Aemilia, ad forum ambulant. Pater īs pecūniam dat. Puerī et puellae in viīs urbis gaudent. In forō, multī virī et fēminae laborant. Aemilia tunicam novam et pallam pulchram dēsīderat. Quīntus gladīum lūdeum et pīlum parvum spectat. Mercātor amīcus eōs salūtat et eīs dōna parva offert. \n\nPost forum, līberī ad lūdum eunt. Magister, vir doctus, līberōs docet.Discipulī et discipulae in tabellīs scrībunt et carmina parva legunt.Quīntus numerōs amat, Aemilia fābulās dē deīs et deābus dēsīderat.Hōra multa labōrat.Puerī et puellae dēfessī sunt. Ad vīllam redeunt. Māter eōs cēna bonā cībat. Post cēnam, patrī et mātrī fābulās longās nārrānt. Nocte, sommus eōs cāpit.",
    vocabulary: [
        {
            word: "Amici",
            translation: "друзья"
        },
        {
            word: "Meus",
            translation: "мой"
        },
        {
            word: "Amici",
            translation: "друзья"
        },
        {
            word: "Amici",
            translation: "друзья"
        },
        {
            word: "Amici",
            translation: "друзья"
        },
        {
            word: "Amici",
            translation: "друзья"
        },
        {
            word: "Amici",
            translation: "друзья"
        }


    ]
}
</script>

<template>
    <div class="p-4">
        <LessonText :data="data" />
    </div>
</template>