/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:	Grim Hollows Weapons 
	Effect:		Adding melee & range weapons
	Content:	Weapons from the Grim Hollows Player Guide
	Code by:	rayvenwilk
	Date:		2021-09-13 (sheet 13.0.4)
*/

var iFileName = "GH-Weapons.js";

RequiredSheetVersion("13.0.6");
// This file adds the weapons from the Grim Hollows Player Guide

// Define the sources
SourceList["GH"] = {
	name : "Grim Hollows Player Guide",
	abbreviation : "GH",
	group : "Third Party",
};

//Weapons

//Melee Weapons	

WeaponsList["catchpole"] = {
	name : "Catchpole",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*catchpole).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "piercing"],
	range : "Melee",
	description : "Entangling, hafted, reach, tripping, two-handed",
	special : false,
	list : "melee",
	weight : 5,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["calvary flail"] = {
	name : "Calvary Flail",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*calvary)(?=.*flail).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 8, "bludgeoning"],
	range : "Melee",
	description : "Momentum (1d10), swift, versatile (1d10)",
	special : false,
	list : "melee",
	weight : 3,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["calvary hammer"] = {
	name : "Calvary Hammer",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*calvary)(?=.*hammer).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 8, "bludgeoning"],
	range : "Melee",
	description : "Armor piercing, momentum (1d12), versatile (1d10)",
	special : false,
	list : "melee",
	weight : 3,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["calvary pick"] = {
	name : "Calvary Pick",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*calvary)(?=.*pick).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 8, "piercing"],
	range : "Melee",
	description : "Armor piercing, momentum (1d12), versatile (1d10)",
	special : false,
	list : "melee",
	weight : 3,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["chakram"] = {
	name : "Chakram",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*chakram).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 4, "piercing"],
	range : "Melee, 20/60 ft",
	description : "Finesse, light, swift, returning, thrown",
	special : false,
	list : "melee",
	weight : 1,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["claymore"] = {
	name : "Claymore",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*claymore).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 6, "slashing"],
	range : "Melee",
	description : "Brutal, heavy, two-handed",
	special : false,
	list : "melee",
	weight : 7,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["double blade"] = {
	name : "Double Blade",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*double)(?=.*blade).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "slashing"],
	range : "Melee",
	description : "Double, momentum (1d10), monk, set, two-handed",
	special : false,
	list : "melee",
	weight : 5,
	dc : false,
	modifiers : [0, 0],
	monkweapon : true,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["double spear"] = {
	name : "Double Spear",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*double)(?=.*spear).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "piercing"],
	range : "Melee",
	description : "Double, momentum (1d10), monk, set, two-handed",
	special : false,
	list : "melee",
	weight : 4,
	dc : false,
	modifiers : [0, 0],
	monkweapon : true,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["elite rapier"] = {
	name : "Elite Rapier",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*elite)(?=.*rapier).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 8, "piercing"],
	range : "Melee",
	description : "Finesse, swift",
	special : false,
	list : "melee",
	weight : 2,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["fighting chain"] = {
	name : "Fighting Chain",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*fighting)(?=.*chain).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 4, "bludgeoning"],
	range : "Melee",
	description : "Disarming, double, entangling, finesse, monk, reach, tripping, two- handed",
	special : false,
	list : "melee",
	weight : 3,
	dc : false,
	modifiers : [0, 0],
	monkweapon : true,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["fighting chain, two-handed"] = {
	name : "Fighting Chain, two-handed",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*fighting)(?=.*chain)(?=.*two-handed).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "slashing"],
	range : "Melee",
	description : "Brutal, disarming, double, entangling, finesse, monk, reach, tripping, bladed",
	special : false,
	list : "melee",
	weight : 6,
	dc : false,
	modifiers : [0, 0],
	monkweapon : true,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["fighting chain, hook"] = {
	name : "Fighting Chain, hook",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*fighting)(?=.*chain)(?=.*hook).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 4, "bludgeoning"],
	range : "Melee",
	description : "Damage (piercing), disarming, double, entangling, finesse, monk, reach, tripping, two-handed",
	special : false,
	list : "melee",
	weight : 3,
	dc : false,
	modifiers : [0, 0],
	monkweapon : true,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["fighting chain, sickle"] = {
	name : "Fighting Chain, sickle",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*fighting)(?=.*chain)(?=.*sickle).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 4, "bludgeoning"],
	range : "Melee",
	description : "Damage (slashing), disarming, double, entangling, finesse, monk, reach, tripping, two-handed",
	special : false,
	list : "melee",
	weight : 3,
	dc : false,
	modifiers : [0, 0],
	monkweapon : true,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["gladiator net"] = {
	name : "Gladiator Net",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*gladiator)(?=.*net).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "bludgeoning"],
	range : "Melee, 5/15 ft",
	description : "Entangling, restraining, thrown (range 5/15)",
	special : false,
	list : "melee",
	weight : 5,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["guardian poleaxe"] = {
	name : "Guardian Poleaxe",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*guardian)(?=.*poleaxe).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 10, "slashing"],
	range : "Melee",
	description : "Damage (piercing), guard, hafted, heavy, reach, set, tripping, two-handed",
	special : false,
	list : "melee",
	weight : 9,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["knightly lance"] = {
	name : "Knightly Lance",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*knightly)(?=.*lance).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 6, "piercing"],
	range : "Melee",
	description : "Momentum (2d10), reach, two-handed (unless mounted)",
	tooltip : "Special: I have disadvantage when I use a lance to attack a target within 5 feet. Also, a lance requires two hands to wield when I'm not mounted.",
	special : true,
	list : "melee",
	weight : 6,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["knightly sword"] = {
	name : "Knightly Sword",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*knightly)(?=.*sword).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 8, "slashing"],
	range : "Melee",
	description : "Guard, defending, precise, versatile (1d10)",
	special : false,
	list : "melee",
	weight : 3,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["military fork"] = {
	name : "Military Fork",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*military)(?=.*fork).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 6, "piercing"],
	range : "Melee",
	description : "Hafted, heavy, reach, set, tripping, two-handed",
	special : false,
	list : "melee",
	weight : 8,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["parrying dagger"] = {
	name : "Parrying Dagger",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*parrying)(?=.*dagger).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 4, "piercing"],
	range : "Melee, 20/60 ft",
	description : "Disarming, defending, finesse, light, thrown",
	special : false,
	list : "melee",
	weight : 1,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["polearm"] = {
	name : "Polearm",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*polearm).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 12, "piercing"],
	range : "Melee",
	description : "Guard, hafted, heavy, reach, set, two-handed",
	special : false,
	list : "melee",
	weight : 12,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["punching dagger"] = {
	name : "Punching Dagger",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*punching)(?=.*dagger).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 4, "piercing"],
	range : "Melee",
	description : "Armor piercing, defending, finesse, light",
	special : false,
	list : "melee",
	weight : 1,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["returning club"] = {
	name : "Returning Club",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*returning)(?=.*club).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 4, "bludgeoning"],
	range : "Melee, 20/60 ft",
	description : "Light, returning, thrown",
	special : false,
	list : "melee",
	weight : 2,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["sabre"] = {
	name : "Sabre",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*sabre).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 8, "slashing"],
	range : "Melee",
	description : "Finesse, swift",
	special : false,
	list : "melee",
	weight : 2,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["sheathed staff"] = {
	name : "Sheathed Staff",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*sheathed)(?=.*staff).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "bludgeoning"],
	range : "Melee",
	description : "Double, monk, versatile (1d8)",
	special : false,
	list : "melee",
	weight : 6,
	dc : false,
	modifiers : [0, 0],
	monkweapon : true,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["side-handle baton"] = {
	name : "Side-handle Baton",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*side-handle)(?=.*baton).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 4, "bludgeoning"],
	range : "Melee",
	description : "Defending, finesse, light, monk, swift",
	special : false,
	list : "melee",
	weight : 2,
	dc : false,
	modifiers : [0, 0],
	monkweapon : true,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["wrath axe"] = {
	name : "Wrath Axe",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*wrath)(?=.*axe).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 6, "slashing"],
	range : "Melee",
	description : "Brutal, hafted, heavy, momentum (2d8), two-handed",
	special : false,
	list : "melee",
	weight : 12,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},
WeaponsList["wrath maul"] = {
	name : "Wrath Maul",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*wrath)(?=.*maul).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 6, "bludgeoning"],
	range : "Melee",
	description : "Brutal, hafted, heavy, momentum (2d8), two-handed",
	special : false,
	list : "melee",
	weight : 15,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "",
},

//Ranged Weapons

WeaponsList["arbalest"] = {
	name : "Arbalest",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*arbalest).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 6, "piercing"],
	range : "80/300 ft",
	description : "Ammunition, heavy, loading, strong-draw, two-handed",
	special : false,
	list : "ranged",
	weight : 20,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "bolt",
},
WeaponsList["blackpowder pistol"] = {
	name : "Blackpowder Pistol",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*blackpowder)(?=.*pistol).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 4, "piercing"],
	range : "25/100 ft",
	description : "Ammunition, blackpowder, loading, light, strong-draw, two-handed",
	special : false,
	list : "ranged",
	weight : 4,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "bullet",
},
WeaponsList["blackpowder rifle"] = {
	name : "Blackpowder Rifle",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*blackpowder)(?=.*rifle).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 6, "piercing"],
	range : "80/300 ft",
	description : "Ammunition, blackpowder, loading, two-handed",
	special : false,
	list : "ranged",
	weight : 10,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "bullet",
},
WeaponsList["blunderbuss"] = {
	name : "Blunderbuss",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*blunderbuss).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 6, "piercing"],
	range : "20/30 ft",
	description : "Ammunition, blackpowder, cumbersome, loading, scatter (line 10), two-handed",
	special : false,
	list : "ranged",
	weight : 10,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "bullet",
},
WeaponsList["blunderbuss, hand"] = {
	name : "Blunderbuss, hand",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*blunderbuss)(?=.*hand).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 4, "piercing"],
	range : "20/30 ft",
	description : "Ammunition, blackpowder, loading, scatter (line 10)",
	special : false,
	list : "ranged",
	weight : 4,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "bullet",
},
WeaponsList["composite, longbow"] = {
	name : "Composite Longbow",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*composite)(?=.*longbow).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 8, "piercing"],
	range : "200/600 ft",
	description : "Ammunition, heavy, strong-draw, two-handed",
	special : false,
	list : "ranged",
	weight : 2,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "arrow",
},
WeaponsList["composite, shortbow"] = {
	name : "Composite Shortbow",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*composite)(?=.*shortbow).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "piercing"],
	range : "100/400 ft",
	description : "Ammunition, strong-draw, two-handed",
	special : false,
	list : "ranged",
	weight : 2,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "arrow",
},
WeaponsList["dragon pistol"] = {
	name : "Dragon Pistol",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*dragon)(?=.*pistol).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 4, "piercing"],
	range : "20 ft",
	description : "Ammunition, blackpowder, loading, scatter (cone 15)",
	special : false,
	list : "ranged",
	weight : 4,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "bullet",
},
WeaponsList["dragon rifle"] = {
	name : "Dragon Rifle",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*dragon)(?=.*rifle).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 6, "piercing"],
	range : "20 ft",
	description : "Ammunition, blackpowder, loading, scatter (cone 15)",
	special : false,
	list : "ranged",
	weight : 4,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "bullet",
},
WeaponsList["flame bellows"] = {
	name : "Flame Bellows",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*flame)(?=.*bellows).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 6, "fire"],
	range : "15 ft",
	description : "Ammunition, cumbersome, loading, magazine (20), scatter (cone 15), two-handed",
	special : false,
	list : "ranged",
	weight : 11,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "bullet",
},
WeaponsList["repeater crossbow"] = {
	name : "Repeater Crossbow",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*repeater)(?=.*crossbow).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 8, "piercing"],
	range : "80/300 ft",
	description : "Ammunition, magazine (6 bolts), repeater, two-handed",
	special : false,
	list : "ranged",
	weight : 7,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "bolt",
},
WeaponsList["repeater crossbow, hand"] = {
	name : "Repeater Crossbow, hand",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*repeater)(?=.*crossbow)(?=.*hand).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 6, "piercing"],
	range : "30/120 ft",
	description : "Ammunition, light, magazine (3 bolts), repeater",
	special : false,
	list : "ranged",
	weight : 3,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "bolt",
},
WeaponsList["repeater crossbow, heavy"] = {
	name : "Repeater Crossbow, heavy",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*repeater)(?=.*crossbow)(?=.*heavy).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 10, "piercing"],
	range : "100/400 ft",
	description : "Ammunition, heavy, magazine (9 bolts), repeater, two-handed",
	special : false,
	list : "ranged",
	weight : 20,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "bolt",
},
WeaponsList["repeater needler"] = {
	name : "Repeater Needler",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*repeater)(?=.*needler).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 1, "piercing"],
	range : "30/120 ft",
	description : "Ammunition, light, magazine (6 blowgun needles), repeater",
	special : false,
	list : "ranged",
	weight : 3,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "dart",
},
WeaponsList["repeater slinger"] = {
	name : "Repeater Slinger",
	source : ["GH", 131],
	defaultExcluded : false,
	regExpSearch : /^(?=.*repeater)(?=.*slinger).*$/i,
	type : "Martial",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 8, "piercing"],
	range : "80/300 ft",
	description : "Ammunition, magazine (9 sling bullets), repeater, two-handed",
	special : false,
	list : "ranged",
	weight : 9,
	dc : false,
	modifiers : [0, 0],
	monkweapon : false,
	isMagicWeapon : false,
	isAlwaysProf : false,
	ammo : "bullet",
}
