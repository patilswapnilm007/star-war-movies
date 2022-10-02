export function romanize(num) {
    if (!+num) return false;
    var digits = String(+num).split("");
    var key = [
        "",
        "C",
        "CC",
        "CCC",
        "CD",
        "D",
        "DC",
        "DCC",
        "DCCC",
        "CM",
        "",
        "X",
        "XX",
        "XXX",
        "XL",
        "L",
        "LX",
        "LXX",
        "LXXX",
        "XC",
        "",
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
    ];
    var roman = "",
        i = 3;
    while (i--) roman = (key[+digits.pop() + i * 10] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

export function sortMovies(movieList, type) {
    return [
        ...movieList.sort((a, b) => {
            if (type === "episode") return a.episode_id - b.episode_id;
            else if (type === "year") {
                return (
                    new Date(a.release_date).getFullYear() -
                    new Date(b.release_date).getFullYear()
                );
            }
        }),
    ];
}
