package com.jeecg.p3.houseaOnline.web.back;

import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.jeecgframework.p3.cg.util.BaihuaUtil;
import org.jeecgframework.p3.core.util.SystemTools;

import javax.servlet.http.HttpServletResponse;

import org.apache.velocity.VelocityContext;
import org.jeecgframework.p3.core.util.plugin.ViewVelocity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.jeecgframework.p3.core.common.utils.AjaxJson;
import org.jeecgframework.p3.core.utils.common.PageList;
import org.jeecgframework.p3.core.utils.common.PageQuery;

import com.jeecg.p3.dictinfo.entity.Dictinfo;
import com.jeecg.p3.dictinfo.service.DictinfoService;
import com.jeecg.p3.houseaOnline.entity.XfFollow;
import com.jeecg.p3.houseaOnline.entity.XfHx;
import com.jeecg.p3.houseaOnline.entity.XfProject;
import com.jeecg.p3.houseaOnline.service.XfFollowService;
import com.jeecg.p3.houseaOnline.service.XfHxService;
import com.jeecg.p3.houseaOnline.service.XfProjectService;
import com.jeecg.p3.system.vo.LoginUser;
import com.jeecg.p3.userinfo.entity.Userinfo;

import org.jeecgframework.p3.core.web.BaseController;

 /**
 * 描述：</b>XfProjectController<br>在线选房，楼盘项目表
 * @author chao.hua
 * @since：2017年11月17日 12时55分27秒 星期五 
 * @version:1.0
 */
@Controller
@RequestMapping("/houseaOnline/back/xfProject")
public class XfProjectController extends BaseController{
  @Autowired
  private XfProjectService xfProjectService;
  
  @Autowired
  private DictinfoService dictinfoService;
  
  @Autowired
  private XfHxService xfHxService;
  
  @Autowired
  private XfFollowService xfFollowService;
/**
  * 列表页面
  * @return
  */
@RequestMapping(value="list",method = {RequestMethod.GET,RequestMethod.POST})
public void list(@ModelAttribute XfProject query,HttpServletResponse response,HttpServletRequest request,
			@RequestParam(required = false, value = "pageNo", defaultValue = "1") int pageNo,
			@RequestParam(required = false, value = "pageSize", defaultValue = "10") int pageSize) throws Exception{
	 	PageQuery<XfProject> pageQuery = new PageQuery<XfProject>();
	 	pageQuery.setPageNo(pageNo);
	 	pageQuery.setPageSize(pageSize);
	 	VelocityContext velocityContext = new VelocityContext();
	 	LoginUser user = (LoginUser)request.getSession().getAttribute("OPERATE_WEB_LOGIN_USER");
	    query.setCreatuser(user.getUserId());;
	    if(query.getIsDelete() ==null){
	    	query.setIsDelete("0");
	    }
	    //如果是管理员角色可以查看所有人发的
	    if(BaihuaUtil.isadmin((List<String>) request.getSession().getAttribute("roleIds"))){
	    	query.setCreatuser(null);
	    }
		pageQuery.setQuery(query);
		velocityContext.put("xfProject",query);
		velocityContext.put("pageInfos",SystemTools.convertPaginatedList(xfProjectService.queryPageList(pageQuery)));
		String viewName = "houseaOnline/back/xfProject-list.vm";
		
		 PageQuery<Dictinfo> pageQuery0 = new PageQuery<Dictinfo>();
		 pageQuery0.setPageNo(0);
		 pageQuery0.setPageSize(20);
		 Dictinfo dictinfo = new Dictinfo();
		 dictinfo.setTypeid(5);  
			pageQuery0.setQuery(dictinfo);
		PageList<Dictinfo> dictlist = dictinfoService.queryPageList(pageQuery0);
		 velocityContext.put("areaInfos", SystemTools.convertPaginatedList(dictlist));
		 
		ViewVelocity.view(request,response,viewName,velocityContext);
}

 /**
  * 详情
  * @return
  */
@RequestMapping(value="toDetail",method = RequestMethod.GET)
public void xfProjectDetail(@RequestParam(required = true, value = "id" ) String id,HttpServletResponse response,HttpServletRequest request)throws Exception{
	VelocityContext velocityContext = new VelocityContext();
	String viewName = "houseaOnline/back/project_detail.vm";
	XfProject xfProject = xfProjectService.queryById(id);
	if(xfProject.getXfProjectcol1() == null){
		xfProject.setXfProjectcol1(1);
	}else{
		xfProject.setXfProjectcol1(xfProject.getXfProjectcol1()+1);
	}
	  PageQuery<XfFollow> pageQuery = new PageQuery<XfFollow>();
	  XfFollow xffollow = new XfFollow();
	  xffollow.setResourceid(id);
	  pageQuery.setQuery(xffollow);
	  int followcount = xfFollowService.count(pageQuery);
	  velocityContext.put("followcount",followcount);
 	 XfHx queryhx = new XfHx() ;
	    if(null ==queryhx.getIsDelete()){
	    	queryhx.setIsDelete("0");
	    }
		  boolean isfollow = true;
		  
		velocityContext.put("isfollow",isfollow);
	 queryhx.setPid(id);
	 velocityContext.put("pagehxInfos", net.sf.json.JSONArray.fromObject(xfHxService.queryAllByPid(queryhx)).toString() );
	velocityContext.put("xfProject",xfProject);
	ViewVelocity.view(request,response,viewName,velocityContext);
}

/**
 * 跳转到添加页面
 * @return
 */
@RequestMapping(value = "/toAdd",method ={RequestMethod.GET, RequestMethod.POST})
public void toAddDialog(HttpServletRequest request,HttpServletResponse response,ModelMap model)throws Exception{
	 VelocityContext velocityContext = new VelocityContext();
	 String viewName = "houseaOnline/back/xfProject-add.vm";
	 PageQuery<Dictinfo> pageQuery0 = new PageQuery<Dictinfo>();
	 pageQuery0.setPageNo(0);
	 pageQuery0.setPageSize(20);
	 Dictinfo dictinfo = new Dictinfo();
	 dictinfo.setTypeid(5);  
		pageQuery0.setQuery(dictinfo);
	PageList<Dictinfo> dictlist = dictinfoService.queryPageList(pageQuery0);
	 velocityContext.put("areaInfos", SystemTools.convertPaginatedList(dictlist));
	 ViewVelocity.view(request,response,viewName,velocityContext);
}

/**
 * 保存信息
 * @return
 */
@RequestMapping(value = "/doAdd",method ={RequestMethod.GET, RequestMethod.POST})
@ResponseBody
public AjaxJson doAdd(HttpServletRequest request,@ModelAttribute XfProject xfProject){
	AjaxJson j = new AjaxJson();
	try {
		xfProject.setCreatuser(((LoginUser)request.getSession().getAttribute("OPERATE_WEB_LOGIN_USER")).getUserId());
		xfProject.setIsDelete("0");;
		xfProject.setCreatetime(new Date());
		xfProjectService.doAdd(xfProject);
		j.setMsg("保存成功");
	} catch (Exception e) {
		j.setSuccess(false);
		j.setMsg("保存失败");
	}
	return j;
}

/**
 * 跳转到编辑页面
 * @return
 */
@RequestMapping(value="toEdit",method = RequestMethod.GET)
public void toEdit(@RequestParam(required = true, value = "id" ) String id,HttpServletResponse response,HttpServletRequest request) throws Exception{
		 VelocityContext velocityContext = new VelocityContext();
		 XfProject xfProject = xfProjectService.queryById(id);
		 velocityContext.put("xfProject",xfProject);
		 String viewName = "houseaOnline/back/xfProject-edit.vm";
		 PageQuery<Dictinfo> pageQuery0 = new PageQuery<Dictinfo>();
		 pageQuery0.setPageNo(0);
		 pageQuery0.setPageSize(20);
		 Dictinfo dictinfo = new Dictinfo();
		 dictinfo.setTypeid(5);  
			pageQuery0.setQuery(dictinfo);
		PageList<Dictinfo> dictlist = dictinfoService.queryPageList(pageQuery0);
		 velocityContext.put("areaInfos", SystemTools.convertPaginatedList(dictlist));
		 ViewVelocity.view(request,response,viewName,velocityContext);
}

/**
 * 编辑
 * @return
 */
@RequestMapping(value = "/doEdit",method ={RequestMethod.GET, RequestMethod.POST})
@ResponseBody
public AjaxJson doEdit(@ModelAttribute XfProject xfProject ,HttpServletRequest request){
	AjaxJson j = new AjaxJson();
	try {
	    LoginUser user = (LoginUser)request.getSession().getAttribute("OPERATE_WEB_LOGIN_USER");
	    xfProject.setCreatuser(user.getUserId());
		xfProjectService.doEdit(xfProject);
		j.setMsg("编辑成功");
	} catch (Exception e) {
		j.setSuccess(false);
		j.setMsg("编辑失败");
	}
	return j;
}


/**
 * 删除
 * @return
 */
@RequestMapping(value="doDelete",method = RequestMethod.GET)
@ResponseBody
public AjaxJson doDelete(@RequestParam(required = true, value = "id" ) String id){
		AjaxJson j = new AjaxJson();
		try {
			xfProjectService.doDelete(id);
			j.setMsg("删除成功");
		} catch (Exception e) {
			j.setSuccess(false);
			j.setMsg("删除失败");
		}
		return j;
}


}

