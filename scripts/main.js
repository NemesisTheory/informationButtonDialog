// good lord

Events.on(EventType.WorldLoadEvent, () => {
  if (Vars.state.rules.sector != SectorPresets.groundZero.sector) return;
    
    const annoyingDialog = new BaseDialog("Information Button");
    annoyingDialog.cont.add("please grow a habit of clicking this button").row();
    annoyingDialog.cont.image(Core.atlas.find("informationButtonDialog-information")).pad(20).row(); // it wont find the image, need help
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
                        const sixDialog = new BaseDialog("Confirmation 5");
                        sixDialog.cont.add("...are you sure?").row();
                        sixDialog.cont.button("..yes", () => {
                            sixDialog.hide();
                            const sevenDialog = new BaseDialog("Confirmation 6");
                            sevenDialog.cont.add("I want to get this across; are you *sure sure sure sure*?").row();
                            sevenDialog.cont.button("SHUT UP", () => {
                                sevenDialog.hide();
                                const eightDialog = new BaseDialog("Confirmation 7");
                                eightDialog.cont.add("..sure?").row();
                                eightDialog.cont.button("GO AWAY", () => {
                                    eightDialog.hide();
                                    const nineDialog = new BaseDialog("Confirmation 8");
                                    nineDialog.cont.add("real or fake?").row();
                                    nineDialog.cont.button("48.0673°N, 12.8633°E 190.145.105.244", () => {
                                        nineDialog.hide();
                                        const tenDialog = new BaseDialog("Confirmation 9");
                                        tenDialog.cont.add("Ok, real final question: ARE YOU SURE?").row();
                                        tenDialog.cont.button("40.4173°N, 82.9071°W 254.421.81.132", () => {
                                            tenDialog.hide();
                                            const elevenDialog = new BaseDialog("Final Confirmation");
                                            elevenDialog.cont.add("OK.").row();
                                            elevenDialog.cont.button("OK", () => elevenDialog.hide()).size(100, 50);
                                            elevenDialog.show(); // I would add more but idk what to put in the dialogue since this is already unfunny
                                        }).size(100, 50);
                                        tenDialog.show();
                                    }).size(100, 50);
                                    nineDialog.show();
                                }).size(100, 50);
                                eightDialog.show();
                            }).size(100, 50);
                            sevenDialog.show();
                        }).size(100, 50);
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
});
