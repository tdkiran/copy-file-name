import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {

	const cfn = vscode.commands.registerCommand('cfn', async () => {

		const oPath = vscode.window.activeTextEditor?.document?.fileName;

		if (!oPath) {
			vscode.window.showErrorMessage(`
				cfn could be only executed only when file editor is active .
			`);
			return false;
		}

		const fileName = path.parse(oPath).name;
		await vscode.env.clipboard.writeText(fileName);
		vscode.window.showInformationMessage(`${fileName} copied!`);
	});

	const cffn = vscode.commands.registerCommand('cffn', async () => {
		const oPath = vscode.window.activeTextEditor?.document?.fileName;

		if (!oPath) {
			vscode.window.showErrorMessage(`
				cfn could be only executed only when file editor is active .
			`);
			return false;
		}

		const fileNameWithExtension = path.basename(oPath);
		await vscode.env.clipboard.writeText(fileNameWithExtension);
		vscode.window.showInformationMessage(`${fileNameWithExtension} copied!`);
		console.log('kiran');
	});

	context.subscriptions.push(cffn);

	context.subscriptions.push(cfn);
}

// this method is called when your extension is deactivated
export function deactivate() { }
