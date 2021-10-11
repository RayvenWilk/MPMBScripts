/*	-INFORMATION-
	Subject:	Lightsabers
	Effect:		Add the Lightsabers
	Remarks:	This is to add the weapons Lightsaber, Shoto Lightsaber, Double-bladed Lightsaber and Lightsaber Pike.
				This is also to add the Kyber Crystal Colors as magic items.
				Lightsabers (https://www.dandwiki.com/wiki/Lightsabers_(5e_Equipment)?fbclid=IwAR0m_TbS9ptOy6BxprNwDW3vxfaeXOpFYi_ckogdABUaOEseJKSlksuVI3g)
	Coded by:	rayvenwilk
	Date:		09.22.2021
	Sheet:		v13.0.5 and newer
*/

var iFileName = "Lightsabers(transcribed by rayvenwilk).js";

RequiredSheetVersion("13.0.6");

WeaponsList["lightsaber"] = {
	name : "Lightsaber",
	source : ["HB"],
	regExpSearch : /^(?=.*lightsaber).*$/i,
	type : "Martial",
	ability : 2,
	abilitytodamage : true,
	damage : [1, 10, ""],
	range : "Melee",
	description : "Finesse, Versatile (2d6) - Lightsabers don't deal type of dmg & cannot be resisted",
	list : "melee",
	weight : 2,
	monkweapon : true,
},
WeaponsList["shoto lightsaber"] = {
	name : "Shoto Lightsaber",
	source : ["HB"],
	regExpSearch : /^(?=.*shoto)(?=.*lightsaber).*$/i,
	type : "Martial",
	ability : 2,
	abilitytodamage : true,
	damage : [1, 8, ""],
	range : "Melee",
	description : "Finesse, Light, Versatile (1d10) - Lightsabers don't deal type of dmg & cannot be resisted",
	list : "melee",
	weight : 1.5,
	monkweapon : true,
},
WeaponsList["double-bladed lightsaber"] = {
	name : "Double-bladed Lightsaber",
	source : ["HB"],
	regExpSearch : /^(?=.*double)(?=.*lightsaber).*$/i,
	type : "Martial",
	ablility : 2,
	abilitytodamage : true,
	damage : [1, 8, ""],
	range : "Melee",
	description : "Finesse, Two-Handed - Lightsabers don't deal type of dmg & cannot be resisted",
	list : "melee",
	weight : 4,
	monkweapon : true,
},
WeaponsList["lightsaber pike"] = {
	name : "Lightsaber Pike",
	source : ["HB"],
	regExpSearch : /^(?=.*lightsaber)(?=.*pike).*$/i,
	type : "Martial",
	ability : 2,
	abilitytodamage : true,
	damage : [1, 10, ""],
	range : "Melee",
	description : "Finesse, Two-Handed, Reach - Lightsabers don't deal type of dmg & cannot be resisted",
	list : "melee",
	weight : 6,
	monkweapon : true,
},


MagicItemsList["kyber crystal"] = {
    name : "Kyber Crystal",
    source : ["HB"],
    type : "wondrous item",
    rarity : "common",
    allowDuplicates : true,
    description : "",
    descriptionFull : "",
    choices : ['Green', 'Light Blue', 'Dark Blue', 'Yellow', 'Orange', 'Bronze', 'Red', 'Purple', 'White', 'Black'],
    "green" : {
        name : "Green Lightsaber",
        type : "weapon (lightsaber)",
        rarity : "common",
        attunement : true,
        description : "All light side force powers you use have their force cost reduced by -2 points.",
        descriptionFull : "Green lightsabers are used primarily by those who seek to understand the mysteries of the force, and fight the dark side at its heart. All light side force powers you use have their force cost reduced by -2 points. This crystal is Common.",
        chooseGear : {
            type : "weapon",
            prefixOrSuffix : "suffix",
            descriptionChange : ["suffix", "lightsaber"],
            itemName1stPage : ["suffix", "Green"],
            excludeCheck : function (inObjKey, inObj) {
                var testRegex = /lightsaber/i;
		return !(testRegex).test(inObjKey) && (!inObj.baseWeaponName || !(testRegex).test(inObj.baseWeaponName));
            }            
        },
        calcChanges : {
		atkAdd : [
			function (fields, v) {
			if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/lightsaber/i).test(v.baseWeaponName) && (/^(?=.*green).*$/i).test(v.WeaponTextName)) {
			v.theWea.isMagicWeapon = true;
			fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
			fields.Description += (fields.Description ? '; ' : '') + 'Light Force cost -2';
			}
		},
			'If I include the word "Green" in the name of a lightsaber, it will be treated as the magic weapon Green Lightsaber. All light side force powers you use have their force cost reduced by -2 points.'
		],
	},
    },
    "light blue" : {
        name : "Light Blue Lightsaber",
        rarity : "common",
        type : "weapon (lightsaber)",
        attunement : true,
        description : "You gain a +2 bonus to attack rolls.",
        descriptionFull : "Light Blue lightsabers are used by jedi who focus on the physical application of the force, most often through righteous combat. You gain a +2 bonus to attack rolls. This crystal is Common.",
        chooseGear : {
            type : "weapon",
            prefixOrSuffix : "suffix",
            descriptionChange : ["suffix", "lightsaber"],
            itemName1stPage : ["suffix", "Light Blue"]
        },
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/lightsaber/i).test(v.baseWeaponName) && (/^(?=.*light blue).*$/i).test(v.WeaponTextName)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + '+2 to hit';
					}
				},
				'If I include the words "Light Blue" in the name of a lightsaber, it will be treated as the magic weapon Light Blue Lightsaber. It has +2 to hit.'
			],
			atkCalc : [
				function (fields, v, output) {
					if (v.isMeleeWeapon && (/lightsaber/i).test(v.baseWeaponName) && (/light blue/i).test(v.WeaponTextName)) {
						output.magic = v.thisWeapon[1];
					}
				},
			],		
        }
    },
    "dark blue" : {
        name : "Dark Blue Lightsaber",
        rarity : "common",
        type : "weapon (lightsaber)",
        attunement : true,
        description : "You gain a +2 bonus to all damage rolls.",
        descriptionFull : "A variant of the traditional blue lightsaber, dark blue lightsaber users focus on outright damage output, rather than the acrobatics of typical lightsaber combat. You gain a +2 bonus to all damage rolls. This crystal is Common.",
        chooseGear : {
            type : "weapon",
            prefixOrSuffix : "suffix",
            descriptionChange : ["suffix", "lightsaber"],
            itemName1stPage : ["suffix", "Dark Blue"]
        },
        calcChanges : {
            atkAdd : [
                function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/lightsaber/i).test(v.baseWeaponName) && (/^(?=.*dark blue).*$/i).test(v.WeaponTextName)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + '+2 to damage';
					}
				},
				'If I include the words "Dark Blue" in the name of a lightsaber, it will be treated as the magic weapon Light Blue Lightsaber. It has +2 to damage.'
			],
			atkCalc : [
				function (fields, v, output) {
					if (v.isMeleeWeapon && (/lightsaber/i).test(v.baseWeaponName) && (/light blue/i).test(v.WeaponTextName)) {
						output.magic = v.thisWeapon[1];
					}
				},
            ]
        }
    },
    "yellow" : {
        name : "Yellow Lightsaber",
        rarity : "uncommon",
        type : "weapon (lightsaber)",
        attunement : true,
        description : "You gain a +1 bonus to attack rolls, and all light side force powers you use have their force cost reduced by -1 points.",
        descriptionFull : "Yellow crystals are primarily used by jedi balanced between the physical and mental applications of the force. You gain a +1 bonus to attack rolls, and all light side force powers you use have their force cost reduced by -1 points. This crystal is Uncommon.",
        chooseGear : {
            type : "weapon",
            prefixOrSuffix : "suffix",
            descriptionChange : ["suffix", "lightsaber"],
            itemName1stPage : ["suffix", "Yellow"]
        },
        calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/lightsaber/i).test(v.baseWeaponName) && (/^(?=.*yellow).*$/i).test(v.WeaponTextName)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + '+1 to hit &-1 light force cost';
					}
				},
				'If I include the words "Yellow" in the name of a lightsaber, it will be treated as the magic weapon Yellow Lightsaber. It has +1 to hit and -1 light force cost.'
			],
			atkCalc : [
				function (fields, v, output) {
					if (v.isMeleeWeapon && (/lightsaber/i).test(v.baseWeaponName) && (/yellow/i).test(v.WeaponTextName)) {
						output.magic = v.thisWeapon[1];
					}
				}, ''
			],		
        }
    },
    "orange" : {
        name : "Orange Lightsaber",
        rarity : "uncommon",
        type : "weapon (lightsaber)",
        attunement : true,
        description : "You gain a +1 bonus to damage rolls, and all light side force powers you use have their force cost reduced by -1 points.",
        descriptionFull : "Orange crystals are also used by jedi balanced between the physical and mental applications of the force, but with a more straight forward combat style. You gain a +1 bonus to damage rolls, and all light side force powers you use have their force cost reduced by -1 points. This crystal is Uncommon.",
        chooseGear : {
            type : "weapon",
            prefixOrSuffix : "suffix",
            descriptionChange : ["suffix", "lightsaber"],
            itemName1stPage : ["suffix", "Orange"]
        },
        calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/lightsaber/i).test(v.baseWeaponName) && (/^(?=.*orange).*$/i).test(v.WeaponTextName)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + '+1 to damage & -1 light force cost';
					}
				},
				'If I include the words "Orange" in the name of a lightsaber, it will be treated as the magic weapon Orange Lightsaber. It has +1 to damage & -1 light force cost'
			],
			atkCalc : [
				function (fields, v, output) {
					if (v.isMeleeWeapon && (/lightsaber/i).test(v.baseWeaponName) && (/light blue/i).test(v.WeaponTextName)) {
						output.magic = v.thisWeapon[1];
					}
				}, ''
			],		
        }
    },
    "bronze" : {
        name : "Bronze Lightsaber",
        rarity : "uncommon",
        type : "weapon (lightsaber)",
        attunement : true,
        description : "You gain a +1 bonus to attack and damage rolls.",
        descriptionFull : "Bronze crystals are used by jedi of great might and valor. You gain a +1 bonus to attack and damage rolls. This crystal is Uncommon.",
        chooseGear : {
            type : "weapon",
            prefixOrSuffix : "suffix",
            descriptionChange : ["suffix", "lightsaber"],
            itemName1stPage : ["suffix", "Bronze"]
        },
        calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/lightsaber/i).test(v.baseWeaponName) && (/^(?=.*bronze).*$/i).test(v.WeaponTextName)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + '+1 to hit & dmg';
					}
				},
				'If I include the words "Bronze" in the name of a lightsaber, it will be treated as the magic weapon Bronze Lightsaber. It has +1 to hit & damage.'
			],
			atkCalc : [
				function (fields, v, output) {
					if (v.isMeleeWeapon && (/lightsaber/i).test(v.baseWeaponName) && (/bronze/i).test(v.WeaponTextName)) {
						output.magic = v.thisWeapon[1]+1;
					}
				}, ''
			],		
        }
    },
    "red" : {
        name : "Red Lightsaber",
        rarity : "rare",
        type : "weapon (lightsaber)",
        attunement : true,
        description : "All dark side force powers you use have their force cost reduced by -2 points. This crystal can only be created by meditating with another crystal for 1 hour.",
        descriptionFull : "A red kyber crystal has been bled by a sith, cementing them in the dark side. All dark side force powers you use have their force cost reduced by -2 points. This crystal can only be created by meditating with another crystal for 1 hour. This crystal is Uncommon.",
        chooseGear : {
            type : "weapon",
            prefixOrSuffix : "suffix",
            descriptionChange : ["suffix", "lightsaber"],
            itemName1stPage : ["suffix", "Red"]
        },
        calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/lightsaber/i).test(v.baseWeaponName) && (/^(?=.*red).*$/i).test(v.WeaponTextName)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + '-2 dark force cost';
					}
				},
				'If I include the words "Red" in the name of a lightsaber, it will be treated as the magic weapon Red Lightsaber. It has +2 to hit.'
			],		
        }
    },
    "purple" : {
        name : "Purple Lightsaber",
        rarity : "rare",
        type : "weapon (lightsaber)",
        attunement : true,
        description : "Often signifying that a jedi has previously, or potentially actively with moderation, dealt with the dark side. You gain a -2 cost in force points to all force powers.",
        descriptionFull : "A purple lightsaber crystal is a complete oddity, often signifying that a jedi has previously, or potentially actively with moderation, dealt with the dark side. You gain a -2 cost in force points to all force powers. This crystal is Rare.",
        chooseGear : {
            type : "weapon",
            prefixOrSuffix : "suffix",
            descriptionChange : ["suffix", "lightsaber"],
            itemName1stPage : ["suffix", "Purple"]
        },
        calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/lightsaber/i).test(v.baseWeaponName) && (/^(?=.*purple).*$/i).test(v.WeaponTextName)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + '-2 all force cost';
					}
				},
				'If I include the words "Purple" in the name of a lightsaber, it will be treated as the magic weapon Purple Lightsaber. It has -2 all force cost.'
			],		
        }
    },
    "white" : {
        name : "White Lightsaber",
        rarity : "rare",
        type : "weapon (lightsaber)",
        attunement : true,
        description : "You gain a +2 bonus to attack and damage rolls.",
        descriptionFull : "Are just as much, if not more of an oddity, as purple crystals. You gain a +2 bonus to attack and damage rolls. This crystal is Rare.",
        chooseGear : {
            type : "weapon",
            prefixOrSuffix : "suffix",
            descriptionChange : ["suffix", "lightsaber"],
            itemName1stPage : ["suffix", "White"],
        },
        calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/lightsaber/i).test(v.baseWeaponName) && (/^(?=.*white).*$/i).test(v.WeaponTextName)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + '+2 to hit & dmg';
					}
				},
				'If I include the words "White" in the name of a lightsaber, it will be treated as the magic weapon White Lightsaber. It has +2 to hit & damage.'
			],
			atkCalc : [
				function (fields, v, output) {
					if (v.isMeleeWeapon && (/lightsaber/i).test(v.baseWeaponName) && (/white/i).test(v.WeaponTextName)) {
						output.magic = v.thisWeapon[1];
					}
				}, ''
			],		
        }
    },
    "black" : {
        name : "Black Lightsaber",
        rarity : "legendary",
        type : "weapon (lightsaber)",
        attunement : true,
        description : "Lost to the depths of the jedi archives, legend states that there is only one of these blades in existence. While wielding a lightsaber with a black kyber crystal, you gain a +2 to AC.",
        descriptionFull : "Constructed by the first Mandalorian to be inducted into the Jedi Order, this 'Darksaber' embodies the user's pride, but not necessarily their darkness. Lost to the depths of the jedi archives, legend states that there is only one of these blades in existence. While wielding a lightsaber with a black kyber crystal, you gain a +2 to AC. This crystal is Legendary.",
        extraAC : [{name : "Black Kyber Crystal", mod : 2, magic : true, text : "I gain a +2 bonux to AC while attuned"}],
        chooseGear : {
            type : "weapon",
            prefixOrSuffix : "suffix",
            descriptionChange : ["suffix", "lightsaber"],
            itemName1stPage : ["suffix", "Black"],
        },
        calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/lightsaber/i).test(v.baseWeaponName) && (/^(?=.*white).*$/i).test(v.WeaponTextName)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + '+2 to AC';
					}
				},
				'If I include the words "Black" in the name of a lightsaber, it will be treated as the magic weapon Black Lightsaber. It has +2 bonus to AC.'
			],
        }
    },
}
