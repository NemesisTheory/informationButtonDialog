// good lord

Events.on(PlayerJoin, player => {
    if (Vars.state.rules.sector == SectorPresets.groundZero.sector) {
        const annoyingDialog = new BaseDialog("Information Button");
        annoyingDialog.cont.add("please grow a habit of clicking this button").row();
        annoyingDialog.cont.image(Core.atlas.find("information")).pad(20).row();
        annoyingDialog.cont.button("OK", () => {
            annoyingDialog.hide();
            const twoDialog = new BaseDialog("Confirmation");
            twoDialog.cont.add("Are you sure you're going to? Or are you just going to ignore the button like every other player?").row();
            twoDialog.cont.button("I'm sure", () => {
                twoDialog.hide();
                const threeDialog = new BaseDialog("Confirmation 2");
                threeDialog.cont.add("Are you suuuuuuuure?").row();
                threeDialog.cont.button("Yes, I'm sure", () => {
                    threeDialog.hide();
                    const fourDialog = new BaseDialog("Confirmation 3");
                    fourDialog.cont.add("Really? Are you *sure sure*?.").row();
                    fourDialog.cont.button("YES, I'M SURE", () => {
                        fourDialog.hide();
                        const fiveDialog = new BaseDialog("Confirmation 4");
                        fiveDialog.cont.add("Reaaaaaaaaally? Like, are you *sure sure sure*?.").row();
                        fiveDialog.cont.button("YES", () => {
                            fiveDialog.hide();
                            const sixDialog = new BaseDialog("Final Confirmation");
                            sixDialog.cont.add("OK.").row();
                            sixDialog.cont.button("OK", () => sixDialog.hide()).size(100, 50);
                            sixDialog.show();
                        }).size(100, 50);
                        fiveDialog.show();
                    }).size(100, 50);
                    fourDialog.show();
                }).size(100, 50);
                threeDialog.show();
            }).size(100, 50);
            twoDialog.show();
        }).size(100, 50);
        annoyingDialog.show();
    }
});
