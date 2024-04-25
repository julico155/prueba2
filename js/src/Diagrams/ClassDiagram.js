/**
 * Adds the general palette to the sidebar.
 */
const addClassDiagramPalette = function (sb, expand) {
  // Reusable cells
  var field = new mxCell(
    "+ field: type",
    new mxGeometry(0, 0, 100, 26),
    "text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;"
  );
  var attributeField = new mxCell(
    "+ field: type",
    new mxGeometry(0, 0, 100, 26),
    "text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;componentName=attribute"
  );
  var methodField = new mxCell(
    "+ method(type): type",
    new mxGeometry(0, 0, 100, 26),
    "text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;componentName=method"
  );

  field.vertex = true;
  attributeField.vertex = true;
  methodField.vertex = true;

  var divider = new mxCell(
    "",
    new mxGeometry(0, 0, 40, 8),
    "line;html=1;strokeWidth=1;fillColor=none;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;"
  );
  divider.vertex = true;

  // Default tags
  var dt = "uml static class ";

  var fns = [
    sb.createVertexTemplateEntry(
      "text;html=1;align=center;fontStyle=1;verticalAlign=middle;spacingLeft=3;spacingRight=3;strokeColor=none;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;",
      80,
      26,
      "Title",
      "Title",
      null,
      null,
      dt + "title label"
    ),
    sb.createVertexTemplateEntry(
      "shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;html=1;container=1;collapsible=0;recursiveResize=0;outlineConnect=0;",
      100,
      300,
      ":Object",
      "Lifeline",
      null,
      null,
      "uml sequence participant lifeline"
    ),
    sb.createVertexTemplateEntry(
      "shape=umlLifeline;participant=umlActor;perimeter=lifelinePerimeter;whiteSpace=wrap;html=1;container=1;collapsible=0;recursiveResize=0;verticalAlign=top;spacingTop=36;outlineConnect=0;",
      20,
      300,
      "",
      "Actor Lifeline",
      null,
      null,
      "uml sequence participant lifeline actor"
    ),
    sb.createVertexTemplateEntry(
      "shape=umlLifeline;participant=umlBoundary;perimeter=lifelinePerimeter;whiteSpace=wrap;html=1;container=1;collapsible=0;recursiveResize=0;verticalAlign=top;spacingTop=36;outlineConnect=0;",
      50,
      300,
      "",
      "Boundary Lifeline",
      null,
      null,
      "uml sequence participant lifeline boundary"
    ),
    sb.createVertexTemplateEntry(
      "shape=umlLifeline;participant=umlEntity;perimeter=lifelinePerimeter;whiteSpace=wrap;html=1;container=1;collapsible=0;recursiveResize=0;verticalAlign=top;spacingTop=36;outlineConnect=0;",
      40,
      300,
      "",
      "Entity Lifeline",
      null,
      null,
      "uml sequence participant lifeline entity"
    ),
    sb.createVertexTemplateEntry(
      "shape=umlLifeline;participant=umlControl;perimeter=lifelinePerimeter;whiteSpace=wrap;html=1;container=1;collapsible=0;recursiveResize=0;verticalAlign=top;spacingTop=36;outlineConnect=0;",
      40,
      300,
      "",
      "Control Lifeline",
      null,
      null,
      "uml sequence participant lifeline control"
    ),
    sb.addEntry("uml sequence invoke invocation call activation", function () {
      var cell = new mxCell(
        "",
        new mxGeometry(0, 0, 10, 80),
        "html=1;points=[];perimeter=orthogonalPerimeter;"
      );
      cell.vertex = true;

      var edge = new mxCell(
        "dispatch",
        new mxGeometry(0, 0, 0, 0),
        "html=1;verticalAlign=bottom;startArrow=oval;endArrow=block;startSize=8;"
      );
      edge.geometry.setTerminalPoint(new mxPoint(-60, 0), true);
      edge.geometry.relative = true;
      edge.edge = true;

      cell.insertEdge(edge, false);

      return sb.createVertexTemplateFromCells(
        [cell, edge],
        10,
        80,
        "Found Message"
      );
    }),
    sb.addEntry(
      "uml sequence invoke call delegation synchronous invocation activation",
      function () {
        var cell = new mxCell(
          "",
          new mxGeometry(0, 0, 10, 80),
          "html=1;points=[];perimeter=orthogonalPerimeter;"
        );
        cell.vertex = true;

        var edge1 = new mxCell(
          "dispatch",
          new mxGeometry(0, 0, 0, 0),
          "html=1;verticalAlign=bottom;endArrow=block;entryX=0;entryY=0;"
        );
        edge1.geometry.setTerminalPoint(new mxPoint(-70, 0), true);
        edge1.geometry.relative = true;
        edge1.edge = true;

        cell.insertEdge(edge1, false);

        var edge2 = new mxCell(
          "return",
          new mxGeometry(0, 0, 0, 0),
          "html=1;verticalAlign=bottom;endArrow=open;dashed=1;endSize=8;exitX=0;exitY=0.95;"
        );
        edge2.geometry.setTerminalPoint(new mxPoint(-70, 76), false);
        edge2.geometry.relative = true;
        edge2.edge = true;

        cell.insertEdge(edge2, true);

        return sb.createVertexTemplateFromCells(
          [cell, edge1, edge2],
          10,
          80,
          "Synchronous Invocation"
        );
      }
    ),
    sb.addEntry(
      "uml sequence self call recursion delegation activation",
      function () {
        var cell = new mxCell(
          "",
          new mxGeometry(0, 20, 10, 40),
          "html=1;points=[];perimeter=orthogonalPerimeter;"
        );
        cell.vertex = true;

        var edge = new mxCell(
          "self call",
          new mxGeometry(0, 0, 0, 0),
          "edgeStyle=orthogonalEdgeStyle;html=1;align=left;spacingLeft=2;endArrow=block;rounded=0;entryX=1;entryY=0;"
        );
        edge.geometry.setTerminalPoint(new mxPoint(5, 0), true);
        edge.geometry.points = [new mxPoint(30, 0)];
        edge.geometry.relative = true;
        edge.edge = true;

        cell.insertEdge(edge, false);

        return sb.createVertexTemplateFromCells(
          [cell, edge],
          10,
          60,
          "Self Call"
        );
      }
    ),
    sb.createVertexTemplateEntry(
      "html=1;points=[];perimeter=orthogonalPerimeter;",
      10,
      80,
      "",
      "Activation",
      null,
      null,
      "uml sequence activation"
    ),
    sb.addEntry("uml sequence lifeline", function () {
      var cell = new mxCell(
        "Lifeline 1",
        new mxGeometry(0, 0, 80, 120),
        'shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;html=1;container=1;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={"edgeStyle":"elbowEdgeStyle","elbow":"vertical","curved":0,"rounded":0};'
      );
      cell.vertex = true;

      return sb.createVertexTemplateFromCells([cell], 10, 120, "Lifeline 1");
    }),
    sb.addEntry("uml sequence destroy", function () {
      var cell = new mxCell(
        "",
        new mxGeometry(0, 0, 30, 30),
        "shape=umlDestroy;whiteSpace=wrap;html=1;strokeWidth=3;targetShapes=umlLifeline;"
      );
      cell.vertex = true;

      return sb.createVertexTemplateFromCells([cell], 20, 40, "Destroy");
    }),
    sb.createEdgeTemplateEntry(
      "html=1;verticalAlign=bottom;startArrow=oval;startFill=1;endArrow=block;startSize=8;",
      60,
      0,
      "dispatch",
      "Found Message 1",
      null,
      "uml sequence message call invoke dispatch"
    ),
    sb.createEdgeTemplateEntry(
      "html=1;verticalAlign=bottom;startArrow=circle;startFill=1;endArrow=open;startSize=6;endSize=8;",
      80,
      0,
      "dispatch",
      "Found Message 2",
      null,
      "uml sequence message call invoke dispatch"
    ),
    sb.createEdgeTemplateEntry(
      "html=1;verticalAlign=bottom;endArrow=block;",
      80,
      0,
      "dispatch",
      "Message",
      null,
      "uml sequence message call invoke dispatch"
    ),
    sb.addEntry("uml sequence return message", function () {
      var edge = new mxCell(
        "return",
        new mxGeometry(0, 0, 0, 0),
        "html=1;verticalAlign=bottom;endArrow=open;dashed=1;endSize=8;"
      );
      edge.geometry.setTerminalPoint(new mxPoint(80, 0), true);
      edge.geometry.setTerminalPoint(new mxPoint(0, 0), false);
      edge.geometry.relative = true;
      edge.edge = true;

      return sb.createEdgeTemplateFromCells([edge], 80, 0, "Return");
    }),
    sb.addEntry("uml sequence frame", function () {
      var cell = new mxCell(
        "frame",
        new mxGeometry(0, 0, 300, 200),
        "shape=umlFrame;whiteSpace=wrap;html=1;pointerEvents=0;"
      );
      cell.vertex = true;

      return sb.createVertexTemplateFromCells([cell], 300, 200, "Frame");
    }),
    sb.addEntry("uml sequence interaction", function () {
      var cell = new mxCell(
        "Interaction heading",
        new mxGeometry(0, 0, 290, 250),
        "shape=umlFrame;whiteSpace=wrap;html=1;pointerEvents=0;recursiveResize=0;container=1;collapsible=0;width=170;"
      );
      cell.vertex = true;

      var constraint1Cell = new mxCell(
        "[constraint1]",
        new mxGeometry(0, 0, 100, 20),
        "text;html=1;"
      );
      constraint1Cell.vertex = true;
      constraint1Cell.geometry.relative = true;
      constraint1Cell.geometry.offset = new mxPoint(20, 40);

      var constraint2Cell = new mxCell(
        "[constraint2]",
        new mxGeometry(0, 125, 290, 10),
        "line;strokeWidth=1;dashed=1;labelPosition=center;verticalLabelPosition=bottom;align=left;verticalAlign=top;spacingLeft=20;spacingTop=15;html=1;whiteSpace=wrap;"
      );
      constraint2Cell.vertex = true;

      cell.insert(constraint1Cell);
      cell.insert(constraint2Cell);

      return sb.createVertexTemplateFromCells(
        [cell],
        290,
        250,
        "Interaction heading"
      );
    }),
    sb.addEntry("uml sequence lifeline", function () {
      var cell = new mxCell(
        "Lifeline1",
        new mxGeometry(0, 0, 100, 200),
        'shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;html=1;container=1;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={"curved":0,"rounded":0}'
      );
      cell.vertex = true;

      var topRect = new mxCell(
        "",
        new mxGeometry(0, 0, 40, 20),
        "shape=partialRectangle;whiteSpace=wrap;html=1;top=0;fillColor=none;point=[];connectable=0;targetShapes=umlLifeline;"
      );
      topRect.vertex = true;
      topRect.geometry.relative = true;
      topRect.geometry.offset = new mxPoint(30, 150);

      var bottomRect = new mxCell(
        "",
        new mxGeometry(0, 0, 40, 20),
        "shape=partialRectangle;whiteSpace=wrap;html=1;bottom=0;fillColor=none;point=[];connectable=0;targetShapes=umlLifeline;"
      );
      bottomRect.vertex = true;
      bottomRect.geometry.relative = true;
      bottomRect.geometry.offset = new mxPoint(30, 70);

      cell.insert(topRect);
      cell.insert(bottomRect);

      return sb.createVertexTemplateFromCells([cell], 100, 200, "Lifeline1");
    }),
    sb.addEntry("uml sequence continuation", function () {
      var cell = new mxCell(
        "Continuation1",
        new mxGeometry(0, 0, 160, 30),
        "rounded=1;dashed=0;whiteSpace=wrap;html=1;"
      );
      cell.vertex = true;

      return sb.createVertexTemplateFromCells([cell], 160, 30, "Continuation1");
    }),
  ];

  sb.addPaletteFunctions(
    "classDiagram",
    mxResources.get("classDiagram"),
    expand || false,
    fns
  );
};

module.exports = addClassDiagramPalette;
