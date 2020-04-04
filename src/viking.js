// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(theDamage) {
    this.theDamage = theDamage;
    this.health = this.health - theDamage;
    if (this.health > 0) {
      return `${this.name} has received ${this.theDamage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(theDamage) {
    this.theDamage = theDamage;
    this.health = this.health - theDamage;
    if (this.health > 0) {
      return `A Saxon has received ${this.theDamage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    let result = this.saxonArmy[this.saxonArmy.length - 1].receiveDamage(
      this.vikingArmy[this.vikingArmy.length - 1].strength
    );

    if (this.saxonArmy[this.saxonArmy.length - 1].health <= 0) {
      this.saxonArmy.pop();
    }
    return result;
  }

  saxonAttack() {
    let result = this.vikingArmy[this.vikingArmy.length - 1].receiveDamage(
      this.saxonArmy[this.saxonArmy.length - 1].strength
    );

    if (this.vikingArmy[this.vikingArmy.length - 1].health <= 0) {
      this.vikingArmy.pop();
    }
    return result;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
