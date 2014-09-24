define([], function () {
	'use strict';
	
	var root = document.createElement('div');
	root.innerHTML = "<app-bar tpl-name=\"app-bar\"></app-bar><text-content tpl-name=\"main-content\">	<h1>Heading 1, the beginning</h1>	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat placerat varius. Maecenas pellentesque nulla id posuere accumsan. Maecenas pellentesque mauris ut justo pharetra, vitae aliquam turpis lobortis. Nullam nibh urna, maximus eget erat vel, tincidunt convallis tortor. In porta ante eu augue luctus, sit amet pulvinar diam dapibus. Nulla vitae massa lorem. Donec sit amet consectetur mi. Ut hendrerit finibus blandit. Mauris at commodo quam, condimentum facilisis lectus. Phasellus sodales est dolor. Praesent sed elit dolor. Nulla facilisi. Vivamus in mollis ligula, eu sodales neque. Quisque eget convallis elit.</p>	<h2>Heading 2, the middle</h2>	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat placerat varius. Maecenas pellentesque nulla id posuere accumsan. Maecenas pellentesque mauris ut justo pharetra, vitae aliquam turpis lobortis. Nullam nibh urna, maximus eget erat vel, tincidunt convallis tortor. In porta ante eu augue luctus, sit amet pulvinar diam dapibus. Nulla vitae massa lorem. Donec sit amet consectetur mi. Ut hendrerit finibus blandit. Mauris at commodo quam, condimentum facilisis lectus. Phasellus sodales est dolor. Praesent sed elit dolor. Nulla facilisi. Vivamus in mollis ligula, eu sodales neque. Quisque eget convallis elit.</p>	<h3>Heading 3, the end</h3>	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat placerat varius. Maecenas pellentesque nulla id posuere accumsan. Maecenas pellentesque mauris ut justo pharetra, vitae aliquam turpis lobortis. Nullam nibh urna, maximus eget erat vel, tincidunt convallis tortor. In porta ante eu augue luctus, sit amet pulvinar diam dapibus. Nulla vitae massa lorem. Donec sit amet consectetur mi. Ut hendrerit finibus blandit. Mauris at commodo quam, condimentum facilisis lectus. Phasellus sodales est dolor. Praesent sed elit dolor. Nulla facilisi. Vivamus in mollis ligula, eu sodales neque. Quisque eget convallis elit.</p></text-content><ul tpl-name=\"home\">	<li tpl-node-name=\"the-node\" rv-each-item=\"items\"><strong tpl-node-name=\"stronger\">{ item.label }</strong></li></ul><ul tpl-name=\"home5\">    <li rv-each-item=\"items\">{ item.label }</li></ul><ul tpl-name=\"list2\">	<li rv-each-item=\"items\">{ item.label }</li></ul>";
	
	var templates = {};
	for (var i = 0; i < root.childNodes.length; i++) {
		var child = root.childNodes [i];
		templates [child.getAttribute('tpl-name')] = child;
		child.removeAttribute('tpl-name');
	}
	
	var findMarkedNodes = function (parentNode, nodeMap) {
		for (var i = 0; i < parentNode.childNodes.length; i++) {
			var child = parentNode.childNodes [i];
				if (child.nodeType === 1) {
				var nodeName = child.getAttribute('tpl-node-name');
				if (nodeName) {
					child.removeAttribute('tpl-node-name');
					nodeMap [nodeName] = child;
				}
			
				findMarkedNodes(child, nodeMap);
			}			
		}
	};
	
	var DOMTree = function (tplNode) {
		var cloned = tplNode.cloneNode(true);
		var nodeMap = {};
		
		findMarkedNodes(cloned, nodeMap);
		
		this.getRootNode = function () {
			return cloned;
		};
		
		this.getNodeByName = function (name) {
			return nodeMap [name];
		};
		
		this.getAllNamedNodes = function () {
			return nodeMap;
		};
	};
	
	var f = function (templateName, options) {
		var domTree = new DOMTree(templates [templateName]);
		options = options || {};
		
		if (options.parent) {
			options.parent.appendChild(domTree.getRootNode());
		}
		
		return domTree;
	};
	
	return f;
});
 