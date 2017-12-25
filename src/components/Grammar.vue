<template>
    <div id="grammar_root">
        <h1>Чё-то про грамматику</h1>
        Для этого задания придется качать отдельную программу:<br><br>
        <a href="https://yadi.sk/d/gIAO8ifA3QvcXH">Для маководов</a><br>
        <a href="https://yadi.sk/d/0SHFnd2p3QvhG5">Для шиндоводов</a><br>
        Линуксоиды, просьба понять и простить.<br><br>
        <br>
        Итак, перед нами задание с грамматическим правилом.<br>
        Например:<br>
        Word ::= (A)? B (C0|C1|C2) (D)* (E0|E1|E2) F (G0|G1)<br>
        Надеюсь, все более-менее помнят, что такое регулярные выражения.<br><br>
        <b>Итак, что же нужно сделать:</b><br>
        <div class="title">
            <b>1.</b> Посчитать количество скобок в выражении. Отдельный элемент типа "B" тоже считается скобками. В
            нашем примере таких штуковин 7
        </div>
        <div class="title">
            <b>2.</b> Запускаем программу, она у нас запросит количество столбцов. Пишем туда то, что мы только что
            посчитали, то бишь 7.
        </div>
        <div class="title">
            <b>3.</b> Далее для каждого столбца нужно посчитать какой количество вариантов представляет собой каждая
            скобка. Т.е. скобка "(А)?" может обозначать либо "" либо "А", то есть вариантов 2.
        </div>
        <div class="title">
            <b>4.</b> Все эти количества подаем на вход программе. В нашем случае ей нужно будет написать:
        </div>
        2 1 3 3 3 1 2<br><br>
        <b>Важно!</b><br>
        <b>(X)* = ( |X|XX)</b> - т.е. возможных вариантов 3 (пустота, один Х или два Х) - это дано по условию.<br>
        <b>(X)+ = (X|XX|XXX)</b> - возможных вариантов 3.<br><br>
        <div class="title">
            <b>5.</b> Программа выдаст заполненную матрицу. Заменяя на соответвующие символы, переписываем результат в
            таблицу.
            <br>
            Цифра обозначает порядковый номер варианта в скобке.<br>
            Например, если у нас было (X)*, 0 - "" (пустота), 1 - "X", 2 - "XX"<br>
            (X0|X1|X2): 0 - "X0", 1 - "X1", 2 - "X2"<br>
            Там где скобка представляет собой один вариант, таблица уже по идее должна быть заполнена за вас.
            "_" в матрице обозначает что можно взять любой символ. В ответе можно так и оставить и сделать сноску, что
            "_" ну или, например, "*" обозначает любой символ :)
        </div>
        В нашем примере получилось следующее:
        <img class="illustration" src="../assets/images/matrix.jpg">
        Первым словом (первой строкой в таблице в бланке будет следующее:
        <table>
            <tr>
                <td></td>
                <td>B</td>
                <td>C1</td>
                <td></td>
                <td>E2</td>
                <td>F</td>
                <td>G0</td>
            </tr>
        </table>
        <div class="title">
            <b>6.</b> Выкрикнуть на всю аудиторию «ПИ — шарага». Чем громче выкрикните, тем больше ПИ — шарага.
        </div>
    </div>
</template>
<style lang="scss" scoped>
    #grammar_root {
        margin-left: 20%;
        margin-right: 20%;
        @media (max-width: 750px) {
            margin-left: 10%;
            margin-right: 10%;
        }
        @media (max-width: 450px) {
            margin-left: 10px;
            margin-right: 10px;
        }

        .title {
            margin-top: 10px;
            margin-bottom: 6px;
        }
    }

    .illustration {
        display: block;
        margin: 20px auto;
        width: 45%;
        @media (max-width: 1100px) {
            width: 60%;
        }
        @media (max-width: 800px) {
            width: 70%;
        }
        @media (max-width: 450px) {
            width: 90%
        }
    }

    td {
        border-style: solid;
        border-width: 1px;
        padding: 3px;
        width: 25px;
    }

    table {
        border-spacing: 0;
        border-width: 1px;
        border-style: solid;
        margin: 20px auto;
    }
</style>
<style lang="scss">
</style>
<script>

export default {
    name: 'Grammar'
};
</script>
