async function user(knex, vars, getQuery) {
    let query, ret;

    if (!vars.id && !vars.name) throw new UserInputError('Form arguments invalid');
    if (vars.id) query = knex.select('id', 'username', 'donatorLevel', 'colorAccent', 'registerDate').from('info').where({ id: vars.id });
    if (vars.name) query = knex.select('id', 'username', 'donatorLevel', 'colorAccent', 'registerDate').from('info').where('username', 'like', vars.name);

    let promise = await getQuery(query)
        .then(_res => ret = _res);

    return ret;
}

module.exports = user;