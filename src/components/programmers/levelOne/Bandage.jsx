const Bandage = (bandage, health, attacks) => {
  // 마지막 공격 시간
  const last = attacks[attacks.length - 1][0];
  // 연속 성공 시간
  let count = 1;
  // 현재 체력
  let hp = health;
  // 마지막 공격 시간까지 반복
  for (let a = 1; a <= last; a++) {
    // 체력이 0 이하면 -1 return
    if (hp < 1) return -1;
    // 회복 시간과 같은 시간에 공격을 받으면 체력을 피해량만큼 감소
    if (attacks[0][0] === a) {
      hp -= attacks[0][1];
      attacks.shift();
      // 공격을 받으면 연속 성공 시간 초기화
      count = 1;
    } else {
      // 연속 성공 시간이 붕대 시전 시간과 같으면 추가 회복량을 더해 체력을 회복
      if (count === bandage[0]) {
        // 체력이 최대 체력보다 커지면 최대 체력으로 초기화
        hp = Math.min(bandage[1] + bandage[2] + hp, health);
        count = 1;
      } else {
        // 연속 성공 시간이 붕대 시전 시간과 같지 않으면 초당 회복량만큼 체력을 회복
        hp = Math.min(bandage[1] + hp, health);
        count++;
      }
    }
  }
  return hp > 0 ? hp : -1;
};

export default Bandage;
