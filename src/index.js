export default function attackOption(hero) {
  const { special } = hero;
  const result = [];
  special.forEach((attack) => {
    const {
      id, name: nameAttack, icon, description = 'Описание недоступно',
    } = attack;
    result.push({
      id, name: nameAttack, icon, description,
    });
  });
  return result;
}
