import Team from '../basic';

class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.level = 1;
  }
}

const bowman = new Character('лучник');
const zombie = new Character('зомби');
const daemon = new Character('демон');

test('should add a team member', () => {
  const team = new Team();
  team.add(bowman);

  expect(team.members).toContainEqual(bowman);
});

test('should throw error', () => {
  const team = new Team();
  expect(() => {
    team.add(bowman);
    team.add(bowman);
  }).toThrow();
});

test('should add all team members', () => {
  const team = new Team();
  team.addAll(bowman, zombie, daemon);

  expect(team.members).toContainEqual(bowman, zombie, daemon);
});

test('should add all team members 2', () => {
  const team = new Team();
  team.addAll(bowman, zombie, daemon, bowman);

  expect(team.members).toContainEqual(bowman, zombie, daemon);
});

test('should create an array', () => {
  const team = new Team();
  team.addAll(bowman, zombie, daemon);
  const received = team.toArray();

  const expected = [bowman, zombie, daemon];

  expect(received).toEqual(expected);
});

test('should create an array 2', () => {
  const team = new Team();
  team.addAll();
  const received = team.toArray();

  const expected = [];

  expect(received).toEqual(expected);
});
