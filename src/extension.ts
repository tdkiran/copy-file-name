import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {

	const cfn = vscode.commands.registerCommand('cfn', async () => {
		if (!(vscode.window && typeof vscode.window.activeTextEditor !== 'function')) return false;
		const currentEditor = await vscode.window.activeTextEditor;
		const fileName = currentEditor ? currentEditor?.document.fileName : null;
		if (!fileName) return false;
		await vscode.env.clipboard.writeText(fileName);
		vscode.window.showInformationMessage(`${fileName} copied!`);
	});

	const cffn = vscode.commands.registerCommand('cffn', async () => {
		await vscode.commands.executeCommand('copyRelativeFilePath');
		const rPath = await vscode.env.clipboard.readText();
		const fileNameWithExtension = path.basename(rPath);
		await vscode.env.clipboard.writeText(fileNameWithExtension);
		vscode.window.showInformationMessage(`${fileNameWithExtension} copied!`);
	});

	context.subscriptions.push(cffn);

	context.subscriptions.push(cfn);
}

// this method is called when your extension is deactivated
export function deactivate() { }
