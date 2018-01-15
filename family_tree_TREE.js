var tree = {};
var unknown = 'unknown'

function Tree(name, birthplace, born, died) {
	this.name = name;
	this.birthplace = birthplace;
	this.born = born;
}

tree.jeremy = new Tree('Jeremy Philipson', 'Utica, NY', 1992);

// PHILIPSON
tree.jeremy.father = new Tree('Gary Philipson', 'Utica, NY', 1957);
// grand parents
tree.jeremy.father.father = new Tree('Herb Philipson', 'Utica, NY', 1922)
tree.jeremy.father.mother = new Tree('Aviva Zuta Philipson', 'New York, NY', 1929)
// great grand parents
tree.jeremy.father.father.mother = new Tree('Sylvia Golinsky Philipson', 'Russia', 1901)
tree.jeremy.father.father.father = new Tree('Louis Philipson', 'New York, NY', 1896)
tree.jeremy.father.mother.mother = new Tree('Hadassah Rabinowitz Zuta', 'Rahavet, Israel', 1900)
tree.jeremy.father.mother.father = new Tree('Eliyahu Zuta', 'Odessa, Russia', unknown)
// great great grand parents
tree.jeremy.father.father.mother.mother = new Tree('Bailey Serling Golinsky', 'Bialystok', unknown)
tree.jeremy.father.father.mother.father = new Tree('Joseph Golinsky', 'Bialystok', unknown)
tree.jeremy.father.father.father.mother = new Tree('Katie Stabinsky Philipson', 'Lithuania', unknown)
tree.jeremy.father.father.father.father = new Tree('Joseph Philipson', 'Lithuania', unknown)
tree.jeremy.father.mother.mother.mother = new Tree('Nachama Schecter Rabinowitz', 'Russia', unknown)
tree.jeremy.father.mother.mother.father = new Tree('Meyer Rabinowitz', 'Russia', unknown)
tree.jeremy.father.mother.father.father = new Tree('Aryen Zuta', 'Russia', unknown)
// great great great grand parents
tree.jeremy.father.father.mother.mother.mother = new Tree('Ariel Serling', unknown, unknown)
tree.jeremy.father.father.mother.mother.father = new Tree('Peshel Serling', unknown, unknown)

// BEHREN
tree.jeremy.mother = new Tree('Lisa Philipson', 'Miami, FL', 1958);
// grandparents
tree.jeremy.mother.father = new Tree('Richard Behren', 'New York, NY', unknown);
tree.jeremy.mother.mother = new Tree('Leta Goldstrom Behren', 'Miami Beach, FL', 1936);
// great grand parents
tree.jeremy.mother.father.mother = new Tree('Rose Richmond Behren', 'Austria', 1902);
tree.jeremy.mother.father.father = new Tree('Abraham Lester Behren', 'New York, NY', 1901);
tree.jeremy.mother.mother.mother = new Tree('Ruth Williamson Goldstrom', 'Brooklyn, NY', 1907);
tree.jeremy.mother.mother.father = new Tree('Melvin Goldstrom', 'Nebraska', 1901)
// great great grand parents
tree.jeremy.mother.father.mother.mother = new Tree( 'Eva Richmond', 'Austria', unknown);
tree.jeremy.mother.father.mother.father = new Tree( 'Jacob Richmond', unknown, unknown);
tree.jeremy.mother.father.father.mother = new Tree('Pauline', 'Russia', unknown);
tree.jeremy.mother.father.father.father = new Tree( 'Louis D. Behren', 'Russia', unknown);
tree.jeremy.mother.mother.mother.mother = new Tree('Lena Williamson', 'Russia', unknown)
tree.jeremy.mother.mother.mother.father = new Tree('Morris Williamson', 'Russia', unknown)
tree.jeremy.mother.mother.father.mother = new Tree('Claire Goldstrom', 'Nebraska', unknown)
tree.jeremy.mother.mother.father.father = new Tree('Sol Goldstrom', 'Germany', unknown)
