let loop = setInterval(find_answer, 1)

function find_answer() {
    let mc_corr = $("#guesses-correct").text();
    let mc_left = $("#guesses-left").text();
    let mc_question = $("#mcquest").text();

    if (mc_corr == 20) {
        console.log("Process done.")
        clearInterval(loop)
        return;
    }

    if ($("#start").length) // Auto start
        $("#start").trigger("click");

    if (mc_corr == 20 && mc_left == 0 || mc_corr == 18 && mc_left == 0 || mc_corr == 19 && mc_left == 0) { // guesses are over and we didn't get 20 correct so restart
        setTimeout(() => {
            clearInterval(loop)
            window.location.reload();
        }, 1)
        return
    }

    function Answer(context) {
        $(".mcanswer:not(.hidden)").each(function () {
            if ($(this).contents().text() == context) {
                $(this).css("font-weight", "900");
                setTimeout(() => {
                    $(this).css("font-weight", "inherit");
                }, 100-10);

                $(this).trigger("click");
            }

            console.log(mc_question, "Chosen:", context);
            return;
        })
    }

    switch(mc_question) {
    case "True or False: Animal cells are specialized to perform a specific function.  These specialized cells may have differences in their structures.": { // TRUE/FALSE
        Answer("True");
        return;
    }
    case "True or False: The model of the animal cell that you saw in middle school is a completely real cell that you can find somewhere in your body.": { // TRUE/FALSE
        Answer("False");
        return;
    }
    case 'True or false:Mrs. Putnam & Mrs. Huynh think that saying "mitochondria is the powerhouse of the cell" is lame and makes you sound like a lame middle schooler.': { // TRUE/FALSE
        Answer("True");
        return;
    }
    case "What do we call a hole in the nuclear membrane or nuclear envelope that lets materials pass through?": {
        Answer("Nuclear pore");
        return;
    }
    case "Which organelles are found ONLY in eukaryotic cells, like yours.": {
        Answer("Nucleus");
        return;
    }
    case "Which organelle is the packaging center? It receives materials, packages them, and sends them to their final destination.": {
        Answer("Golgi bodies or Golgi complex or Golgi Apparatus");
        return;
    }
    case "Which organelle is covered in ribosomes because it makes and modifies proteins": {
        Answer("Rough ER");
        return;
    }
    case "Which organelle is the liquid part of the cell that all the other organelles float in?": {
        Answer("Cytoplasm or cytosol")
        return;
    }
    case "Which organelle makes and modifies lipids as well as detoxifying the cell?": {
        Answer("Smooth ER");
        return;
    }
    case "Which organelle makes proteins?": { //
        Answer("Ribosomes");
        return;
    }
    case "What do we call the dark spot in the nucleus where ribosomes are made?": {
        Answer("Nucleolus");
        return;
    }
    case "Which organelle surrounds the cell and regulates what goes into and out of the cell": {
        Answer("Cell membrane or plasma membrane");
        return;
    }
    case "Which organelle holds the DNA?": {
        Answer("Nucleus");
        return;
    }
    case "Which organelles are for storage of materials?": {
        Answer("Vacuoles and vesicles.");
        return;
    }
    case "Which organelle is only used during cell division?  It makes spindle fibers that pull the chromosomes apart.": {
        Answer("Centrioles or centrosomes");
        return;
    }
    case "Which organelle, for structure and support, is found in fungal and plant cells, but NOT animal cells?": {
        Answer("Cell wall");
        return;
    }
    case "Which organelle performs cellular respiration to produce ATP energy?": {
        Answer("Mitochondria");
        return;
    }
    case "What do we call the membrane that surrounds the nucleus?": {
        Answer("Nuclear envelope or nuclear membrane");
        return;
    }
    case 'Which organelle is a bag of digestive enzymes for digesting large food, old organelles, and to act as a "self destruct" mechanism.': {
        Answer("Lysosomes");
        return;
    }
    case "Which organelle gives animal cells structure, support, and movement?  This organelle is mostly made of microtubules and microfilaments.": {
        Answer("Cytoskeleton");
        return;
    }
    }
}
