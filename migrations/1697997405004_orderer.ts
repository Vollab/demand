import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate'

export const shorthands: ColumnDefinitions | undefined = undefined

export async function up(pgm: MigrationBuilder): Promise<void> {
	pgm.createTable(
		{ schema: 'demand', name: 'orderer' },
		{
			id: {
				type: 'uuid',
				unique: true,
				notNull: true,
				primaryKey: true,
				references: 'user',
				onDelete: 'CASCADE'
			}
		}
	)
}

export async function down(pgm: MigrationBuilder): Promise<void> {
	pgm.dropTable('orderer')
}
